import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ChangePasswordDto } from '../user/dto/change-password.dto';
import { DeleteUserDTO } from '../user/dto/delete-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('private')
  @UseGuards(AuthGuard('jwt'))
  async hiddenInformation() {
    return 'hidden information';
  }

  @Get('public')
  async publicInformation() {
    return 'this can be seen by anyone';
  }

  @Post('register')
  async register(@Body() RegisterDTO: CreateUserDto) {
    const user = await this.userService.create(RegisterDTO);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('login')
  async login(@Body() RegisterDTO: CreateUserDto) {
    console.log('Received login request with data:', RegisterDTO);
    const user = await this.userService.findByLogin(RegisterDTO);
    console.log('user: ', user);

    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    console.log('user pre return post login: ', user);
    return { user, token };
  }

  @Patch('change_password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return this.userService.changePassword(changePasswordDto);
  }

  @Delete('delete_account')
  @UseGuards(AuthGuard('jwt'))
  async deleteAccount(@Body() deleteUserDto: DeleteUserDTO) {
    return this.userService.deleteUser(deleteUserDto);
  }
}
