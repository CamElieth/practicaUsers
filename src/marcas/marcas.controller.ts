import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MarcaService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';


@Controller('marcas')
export class MarcasController {
    constructor(private readonly marcasServices: MarcaService) {}

    @Post()
    async create (@Body() marcaDto: CreateMarcaDto) {
        return await this.marcasServices.create(marcaDto);
    }

    @Get()
    findAll(){
        return this.marcasServices.findAll;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.marcasServices.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.marcasServices.remove(id);
    }

    //el metodo patch actualiza parcialmentee
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id:number,
        @Body() createMarcaDto: CreateMarcaDto,
    ) {
        return this.marcasServices.update(id, createMarcaDto);
    }

}


