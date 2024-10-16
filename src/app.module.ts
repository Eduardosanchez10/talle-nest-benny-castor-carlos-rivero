import { Module } from '@nestjs/common';
import {  ProductController } from './product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ ProductModule,
    
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:`.env.${process.env.PORT}`
    })
   ],

  providers: [ProductService],
})
export class AppModule {}
