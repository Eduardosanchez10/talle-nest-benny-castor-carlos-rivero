import { ProductEntity } from "../entity/product.entity"

export class PaginationDto{
    
    page:number
    limit:number
    total:number
    lastPage:number
    data:ProductEntity[]
}