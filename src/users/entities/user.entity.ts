import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity ()
export class User {

    @PrimaryGeneratedColumn({ type: 'int4'}) //este decorador hace referencia al primary key
    id:number;

    @Column ({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column ({ type: 'varchar', length: 20, nullable: false })
    password: string;

    @Column ({ type: 'varchar', length: 100, nullable: false })
    email: string;

    @Column ({ type: 'varchar', length: 100, nullable: false })
    sexo: string;
    
    @Column ({ type: 'boolean', default: true })
    active: boolean;
}