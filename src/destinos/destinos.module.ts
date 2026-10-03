import { Module } from '@nestjs/common';
import { DestinosController } from './destinos.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { DestinosService } from './destinos.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [DestinosController],
  providers: [DestinosService],
})
export class DestinosModule {}