import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 추가 요소 자르기
      forbidNonWhitelisted: true, // 추가요소 들어오면 에러
      transform: true, // 지정된 타입으로 변경
    }),
  );
  await app.listen(3001);
}
bootstrap();
