declare namespace NodeJS{
    interface ProcessEnv{
        PORT:Number,
        JWT_SECRET:String,
        HASH_SALT:Number

    }
}