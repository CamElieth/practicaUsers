import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/Typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers:[ProductService], //aqui van los servicios

    controllers:[ ProductsController ], //aqui van los controladores
})
export class ProductsModule{}
