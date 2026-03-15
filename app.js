import 'dotenv/config'
import express from "express"
import {bookRouter} from "./routes/books.js"
import { connectDB } from './Config/connectDB.js'

const app = express()

const PORT_SERVER = process.env.PORT || 1322

app.use(express.json())

connectDB()

app.use("/books",bookRouter)

app.listen(PORT_SERVER,()=>{
    console.log(`Servidor levantado en http://localhost:${PORT_SERVER}`)
})


export default app



