import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignupUserDto } from './dtos/signup-user.dto';
import { generatePassword, validatePassword } from './util/gen-password';
import { SigninUserDto } from './dtos/signin-user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EXPIRE_TIME } from './util/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private config: ConfigService,
    private jwtService: JwtService,
  ) {}
  /**
   * 유저 계정을 생성하는 메서드.
   * 유저가 존재하면 에러 반환
   */
  async signup({ login_id, email, name, password }: SignupUserDto) {
    const isUserExist = await this.userService.isUserExist({ login_id, email });
    if (isUserExist) {
      throw new BadRequestException('유저가 이미 존재합니다');
    }
    // 비밀번호 생성
    const passwordWithSalt = await generatePassword(password);
    // 유저 생성
    const user = await this.userService.create({
      login_id,
      email,
      name,
      passwordWithSalt,
    });
    return user;
  }

  async signin(data: SigninUserDto) {
    const user = await this.validateUser(data);

    const payload = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };

    return {
      user,
      backendToken: {
        access_token: await this.jwtService.signAsync(payload, {
          expiresIn: `${EXPIRE_TIME}s`,
          secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        }),
        refresh_token: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
        }),
        expiresIn: new Date(Date.now() + EXPIRE_TIME),
      },
    };
  }

  async validateUser(data: SigninUserDto) {
    const existUser = await this.userService.findOne({
      login_id: data.login_id,
    });
    if (!existUser) {
      throw new UnauthorizedException('계정 정보가 옳지 않습니다.');
    }

    const isPasswordValid = await validatePassword(
      existUser.password,
      data.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('계정 정보가 옳지 않습니다.');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = existUser;
    return result;
  }

  async refresh(data: { user: any }) {
    const payload = {
      user: data.user,
    };

    return {
      user: data.user,
      backendToken: {
        access_token: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        }),
        refresh_token: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
        }),
        expiresIn: new Date(Date.now() + EXPIRE_TIME),
      },
    };
  }
}
