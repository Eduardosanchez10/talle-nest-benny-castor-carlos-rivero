import { ProductEntity } from "src/product/entity/product.entity"

export interface productResponse{
    total:  number;
    product:  ProductEntity[];
}