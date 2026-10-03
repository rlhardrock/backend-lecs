import { Controller, Get, Param } from '@nestjs/common';
import { DestinosService } from './destinos.service.js';

@Controller('destinos')
export class DestinosController {
  constructor(private readonly destinosService: DestinosService) {}

  @Get(':codigo/completo')
  buscarCompletoPorDestino(@Param('codigo') codigo: string) {
    return this.destinosService.buscarCompletoPorDestino(codigo);
  }
}