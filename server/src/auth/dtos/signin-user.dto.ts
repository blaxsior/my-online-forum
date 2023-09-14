import { IsString, Length } from 'class-validator';

export class SigninUserDto {
  @IsString()
  @Length(5, 20)
  login_id: string;

  @IsString()
  @Length(8, 20)
  password: string;
}
