
import { response, Router, request } from "express";
import {booksController} from "../Controllers/book.js"

export const bookRouter = Router()

bookRouter.get("/",booksController.getAll)
bookRouter.get("/:idBook",booksController.getOne)
bookRouter.post("/",booksController.createBook)



