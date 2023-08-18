import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from '../dto/product.dto';
import { ProductService } from '../services/product.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsServices: ProductService) {}

    @Post()
    async create (@Body() productDto: CreateProductDto) {
        return await this.productsServices.create(productDto);
    }

    @Get()
    findAll(){
        return this.productsServices.findAll;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.productsServices.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.productsServices.remove(id);
    }

    //el metodo patch actualiza parcialmentee
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id:number,
        @Body() createProductDto: CreateProductDto,
    ) {
        return this.productsServices.update(id, createProductDto);
    }

}