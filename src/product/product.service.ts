import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create.product.dto';
import { ProductEntity } from './entity/product.entity';
import { UpdateProductDto } from './dtos/update.product.dto';

@Injectable()
export class ProductService{
  private readonly product:ProductEntity[]=[
    {
    id:"1",
    name:"nose",
    description:"nose",
    stock:30,
    price: 5,
    photo: ["xsjanjnfanfa"],
    IsActive: true, 
  },{
    id:"2",
    name:"nose2",
    description:"nose2",
    stock:37,
    price: 4,
    photo: ["xsjanjnfanfa2"],
    IsActive: true, 
  },
]

  create( createProductDto: CreateProductDto ){
    return createProductDto;
    }
  
    async findAll( query: object[]): Promise<ProductEntity[]>{
      try {
          if( this.product.length === 0 ){
              throw new NotFoundException("Users not found!");
          }
          return this.product
      } catch (error) {
          throw new InternalServerErrorException("No se que paso...")
      }
  }
  async findOne( id:string ): Promise<ProductEntity>{
    try {
        const product =  this.product.find((product)=>product.id === id);
        if( !product ){
            throw new NotFoundException("User not found!")
        }

        return product
    } catch (error) {
        throw new InternalServerErrorException(error)
    }
}
update( id:String, updateProductDto: UpdateProductDto ){
 const product =  this.product.find((product)=>product.IsActive  ===false);
if( product){
  throw 'no hay'
}   
  return {
      id, updateProductDto,
  };
}

remove( id:string ){
  return {id};
}
}

