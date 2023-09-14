import { IsString, IsEmail, Length } from 'class-validator';

export class SignupUserDto {
  @IsString()
  @Length(5, 20)
  // @Min(5)
  // @Max(20)
  login_id: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(2, 20)
  name: string;

  @IsString()
  @Length(8, 20)
  password: string;
}
