import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DestinosService {
  constructor(private readonly prisma: PrismaService) {}

  async buscarCompletoPorDestino(codigo: string) {
    const [destino, lec] = await Promise.all([
      this.prisma.destinos.findFirst({
        where: {
          destino: codigo,
        },
      }),

      this.prisma.lecs.findFirst({
        where: {
          destino: codigo,
        },
      }),
    ]);

    if (!destino && !lec) {
      throw new NotFoundException(`CÓDIGO SIN DESTINO ASIGNADO: ${codigo}`);
    }

    return {
      destino: destino
        ? {
            actividad: destino.actividad,
            destino: destino.destino,
            producto: destino.producto,
            plazo: destino.plazo,
            linea: destino.linea,
            programa: destino.programa,
          }
        : null,

      lec: {
        lec: lec?.lec ?? ' ',
      },

    };
  }
}