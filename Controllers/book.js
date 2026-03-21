
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

    static async createBook(request,response){

        try {
            
            const {titulo,autor,anioPublicacion} = request.body

            const data = await book.createBook({titulo,autor,anioPublicacion})

            response.status(201).json(data)

        } catch (error) {
            
            response.status(500).send(error)

        }


    }

    static async updateBook(request,response){


        const {titulo,autor,anioPublicacion,adquirido} = request.body

        try {

            const {idBook} = request.params

            const data = await book.updateBook(idBook,{titulo,autor,anioPublicacion,adquirido})

            response.status(200).json(data)
            
        } catch (error) {

            response.status(200).send(error)
            
        }

    }

    static async deleteBook(request,response){

        try {
            
            const {idBook} = request.params

            const data = await book.deleteBook(idBook)

            response.status(200).json(data)

        } catch (error) {

            response.status(500).send(error)
            
        }
        
    }

}