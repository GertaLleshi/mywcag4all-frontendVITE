import { IsEmail, IsString, Length } from 'class-validator';

export class ChangePasswordDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 20)
  newPassword: string;
}
