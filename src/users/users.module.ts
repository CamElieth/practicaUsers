import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/Typeorm';
import { User } from './entities/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers:[
       
    ],

    controllers:[
        
    ],
})
export class ProductsModule{}