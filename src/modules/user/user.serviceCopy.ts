import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from 'src/modules/user/entities/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { returnUser } from './dto/return-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async create(RegisterDTO: CreateUserDto) {
    const { email } = RegisterDTO;
    const user = await this.model.findOne({ email });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.model(RegisterDTO);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async findByLogin(loginDTO: LoginDTO): Promise<returnUser> {
    const { email, password } = loginDTO;
    const user = await this.model.findOne({ email }).exec();
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }
  }

  sanitizeUser(user: UserDocument): returnUser {
    const sanitizedUser: returnUser = {
      _id: user._id.toString(),
      name: user.name,
      surname: user.surname,
      username: user.username,
      studentId: user.studentId,
      email: user.email,
      isAdmin: user.isAdmin,
      // Non includere la password
    };
    return sanitizedUser;
  }

  async findByPayload(payload: any) {
    const { email } = payload;
    return await this.model.findOne({ email });
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
  const { email, newPassword } = changePasswordDto;

  // Trova l'utente in base all'email
  const user = await this.model.findOne({ email });
  if (!user) {
    throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
  }

  // Hash della nuova password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Aggiorna la password dell'utente
  user.password = hashedPassword;

  // Salva le modifiche
  const updatedUser = await user.save();

  // Rimuovi eventuali dati sensibili prima di restituire l'utente
  const sanitizedUser = this.sanitizeUser(updatedUser);

  return { message: 'Password changed successfully', user: sanitizedUser };
}

  async deleteUser(deleteUserDto: DeleteUserDTO): Promise<any> {
    const { email, password } = deleteUserDto;
    const user = await this.model.findOne({ email });
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      await this.model.findByIdAndDelete(user._id);
      return { message: 'User deleted successfully' };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }
  }

  async retrieveUsersByTotalScore() {
    const ranking = await this.model.aggregate([
      {
        $lookup: {
          from: 'websites',
          localField: '_id',
          foreignField: 'user',
          as: 'websites',
        },
      },
      {
        $unwind: '$websites',
      },
      {
        $group: {
          _id: '$_id',
          totalScore: { $sum: '$websites.score' },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { totalScore: -1 },
      },
      {
        $project: {
          _id: 1,
          totalScore: 1,
          count: 1,
        },
      },
    ]);

    const rankingPopulated = await this.model.populate(ranking, {
      path: '_id',
      select: '-_id username',
    });

    const renamedRanking = rankingPopulated.map((item: any) => ({
      user: item._id,
      totalScore: item.totalScore,
      count: item.count,
    }));

    return renamedRanking;
  }
}
