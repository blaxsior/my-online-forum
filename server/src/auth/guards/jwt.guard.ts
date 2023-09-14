// https://www.youtube.com/watch?v=khNwrFJ-Xqs&t=3607s
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  // UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request as ExpressRequest } from 'express';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<ExpressRequest>();
    const token = this.extractTokenFromHeader(req);
    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
      });

      req['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  /**
   * 헤더에서 jwt access token 추출
   */
  extractTokenFromHeader(req: ExpressRequest) {
    if (!req.headers.authorization) return undefined;
    const [type, token] = req.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
