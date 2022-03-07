import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, cert, applicationDefault } from 'firebase-admin/app';
import * as dotenv from 'dotenv'
async function bootstrap() {
  dotenv.config();
  initializeApp({
    credential: applicationDefault(),
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
