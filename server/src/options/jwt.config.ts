import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const jwtConfig: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    secret: config.get<string>('JWT_SECRET'),
    global: true,
  }),
};
