import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

@Injectable()
export class ModelosService {
  create(createModeloDto: CreateModeloDto) {
    return 'This action adds a new modelo';
  }

  findAll() {
    return `Esta accion me retorna todas los modelos`;
  }

  findOne(id: number) {
    return `Esta accion retorna el modelo Numero #${id} `;
  }

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return `Esta accion actualiza el modelo Numero #${id} `;
  }

  remove(id: number) {
    return `Esta accion elimina el modelo Numero #${id} `;
  }
}
