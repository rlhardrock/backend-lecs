import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://frontend-lecs.netlify.app'
    ],
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
await bootstrap();
