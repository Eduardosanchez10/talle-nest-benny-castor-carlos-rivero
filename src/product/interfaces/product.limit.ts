import { ProductEntity } from "../entity/product.entity"

export interface ProductLimit{
    page:number
    limit:number
    total:number
    lastPage:number
    data:ProductEntity[]
}