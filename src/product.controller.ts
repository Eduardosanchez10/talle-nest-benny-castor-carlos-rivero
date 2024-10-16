import { CreateProductDto } from './product/dtos/create.product.dto';
import { ProductEntity } from './product/entity/product.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { UpdateProductDto } from './product/dtos/update.product.dto';
import { PaginationDto } from './product/dtos/pagination.dto';


@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService,
){}

@Post()
create(@Body() createProductDto: CreateProductDto ){
    return this.productService.create(createProductDto);
}
@Get()
    findAll( @Query() query: Object[] ){
        return this.productService.findAll(query);
    }

    @Get(":id")
    findOne( @Param("id") id:string ){
        return this.productService.findOne(id);
    }

    @Patch(":id")
    update( @Param("id") id:String, @Body() updateProductDto: UpdateProductDto ){
        
        return this.update(id, updateProductDto)
    }

    @Delete(":id")
    remove( @Param("id") id:string ){
        return this.productService.remove(id);
    }
}

