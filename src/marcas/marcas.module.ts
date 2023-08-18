import { Module } from '@nestjs/common';
import { MarcaService } from './marcas.service';
import { MarcasController } from './marcas.controller';

@Module({
  controllers: [MarcasController],
  providers: [MarcaService]
})
export class MarcasModule {}
