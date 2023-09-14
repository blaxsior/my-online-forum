import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';

export class ChannelGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<ExpressRequest>();
    return true;
  }
}
