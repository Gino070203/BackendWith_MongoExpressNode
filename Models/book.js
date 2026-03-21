import mongoose from "mongoose";
import libros from "../SchemasMongo/book.js"

export class book{

    static async getAll(){
        return await libros.find(); 
    }

    static async getOne(idBook){
        return await libros.findById(idBook)
    }


    static async createBook(book){
        return await libros.create(book)
    }

}