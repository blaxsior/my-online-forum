import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    database: config.get<string>('MYSQL_DB'),
    host: config.get<string>('MYSQL_HOST'),
    username: config.get<string>('MYSQL_USERNAME'),
    password: config.get<string>('MYSQL_PASSWORD'),
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
  }),
};
//npm install mysql2 필요
