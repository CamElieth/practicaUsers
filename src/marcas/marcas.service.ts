import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService{
    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepo: Repository<Marca>,
    ){}

    //crear un registro
    
    async create(createMarcaDto: CreateMarcaDto){
        const marca = this.marcaRepo.create(createMarcaDto);
        await this.marcaRepo.save(marca);

        return marca;
    }

    //Encontrar un registro
    findOne(id: number) {
        return this.marcaRepo.findOneBy({ id });
    }

    //Mostrar todos los registros
    findAll(){
        return this.marcaRepo.find({
            order: { id: 'ASC'},
        }); 
    }

     //eliminar un registro

     async remove(id: number) {
        const marca = await this.findOne(id);
        await this.marcaRepo.remove(marca);
        return 'marca eliminada satisfactoriamente';
            
     }

     //actualizar un producto
     async update(id: number, cambios:CreateMarcaDto){
        const oldMarca = await this.findOne(id);
        const updatedMarca = await this.marcaRepo.merge(oldMarca, cambios);
        return this.marcaRepo.save(updatedMarca);
     }

    }