import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>,
    ){}

    //crear un registro
    
    async create(createProductoDto: CreateProductDto){
        const product = this.productRepo.create(createProductoDto);
        await this.productRepo.save(product);

        return product;
    }

    //Encontrar un registro
    findOne(id: number) {
        return this.productRepo.findOneBy({ id });
    }

    //Mostrar todos los registros
    findAll(){
        return this.productRepo.find({
            order: { id: 'ASC'},
        }); 
    }

     //eliminar un registro

     async remove(id: number) {
        const product = await this.findOne(id);
        await this.productRepo.remove(product);
        return 'Producto eliminado satisfactoriamente';
            
     }

     //actualizar un producto
     async update(id: number, cambios:CreateProductDto){
        const oldProduct = await this.findOne(id);
        const updatedProduct = await this.productRepo.merge(oldProduct, cambios);
        return this.productRepo.save(updatedProduct);
     }
    
}