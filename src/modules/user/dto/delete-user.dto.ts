import { IsString } from 'class-validator';

export class DeleteUserDTO {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}