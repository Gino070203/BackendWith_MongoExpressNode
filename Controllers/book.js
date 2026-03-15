
import  {book}  from "../Models/book.js";


export class booksController{

    static async getAll(request,response){

        try {
            
            const listBooks = await book.getAll()
            response.status(200).json(listBooks)

        } catch (error) {

            response.status(500).send(error)

        }            

        
    }

    static async getOne(request,response){

        try {
            
            const {idBook} = request.params

            const libro = await book.getOne(idBook)

            response.status(200).json(libro)

        } catch (error) {

            response.status(500).send(error)

        }            


    }

}