import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Request,
} from '@nestjs/common';
import { setTimeout } from 'timers/promises';
import { SignupUserDto } from './dtos/signup-user.dto';
import { AuthService } from './auth.service';
import { SigninUserDto } from './dtos/signin-user.dto';
import { RefrestJwtGuard } from './guards/refresh.guard';
import { Request as ExpressRequest } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('recover-password') // TODO: 비밀번호 찾기 구현
  async findPassword(@Body() body: any) {
    await setTimeout(3000);
    return { status: true };
  }

  /**
   * 유저를 생성하는 경로
   * @returns 생성된 유저 정보
   */
  @Post('signup')
  @HttpCode(201) // created
  async signup(@Body() signupDto: SignupUserDto) {
    const user = await this.authService.signup(signupDto);
    return user;
  }

  /**
   * 로그인을 처리하는 경로
   * @returns 로그인 유저 정보
   */
  @Post('signin')
  @HttpCode(200) // ok
  async signin(@Body() signinDto: SigninUserDto) {
    const userWithToken = await this.authService.signin(signinDto);
    return userWithToken;
  }

  /**
   * Access token을 갱신하는 경로
   */
  @UseGuards(RefrestJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: ExpressRequest) {
    return await this.authService.refresh(req['user']);
  }
}
