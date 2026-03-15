import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        titulo : {
            type : String,
            required : true
        },
        autor : {
            type : String,
            required : true
        },
        anioPublicacion: {
            type : Number,
            required : true
        },
        stock : {
            type : Number,
            required : false
        },description :{
            type : String,
            required : false
        },adquirido : {
            type : Boolean,
            default : false
        }, 

    },{timestamps : true}
)

export default mongoose.model('libros',bookSchema)