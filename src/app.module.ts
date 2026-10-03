import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { DestinosModule } from './destinos/destinos.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
     PrismaModule,
     DestinosModule
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
