import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsNumber()
    stock: number;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsArray()
    photo: string[];

    @IsNotEmpty()
    @IsBoolean()
    isActive: Boolean;
}