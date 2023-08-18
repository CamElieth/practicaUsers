import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ){}

    //crear un registro
    
    async create(createUserDto: CreateUserDto){
        const user = this.userRepo.create(createUserDto);
        await this.userRepo.save(user);

        return user;
    }

    //Encontrar un registro
    findOne(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    //Mostrar todos los registros
    findAll(){
        return this.userRepo.find({
            order: { id: 'ASC'},
        }); 
    }

     //eliminar un registro

     async remove(id: number) {
        const user = await this.findOne(id);
        await this.userRepo.remove(user);
        return 'Usuario eliminado satisfactoriamente';
            
     }

     //actualizar un producto
     async update(id: number, cambios:CreateUserDto){
        const oldUser = await this.findOne(id);
        const updatedUser = await this.userRepo.merge(oldUser, cambios);
        return this.userRepo.save(updatedUser);
     }
    
}