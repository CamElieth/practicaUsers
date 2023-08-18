import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/user.dto";


@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UserService) {}

    @Post()
    async create (@Body() userDto: CreateUserDto) {
        return await this.usersServices.create(userDto);
    }

    @Get()
    findAll(){
        return this.usersServices.findAll;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.usersServices.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id:number) {
        return this.usersServices.remove(id);
    }

    //el metodo patch actualiza parcialmentee
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id:number,
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersServices.update(id, createUserDto);
    }

}