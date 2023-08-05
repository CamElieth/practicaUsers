import { IsNotEmpty, IsNumber, IsString, MaxLength, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsNumber()
    id: number;
    // los decoradores en el dto validan que la info que se agregue sea la correcta

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    sexo: string;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    active: boolean;




}