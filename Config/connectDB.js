import 'dotenv/config'
import mongoose from "mongoose";


export const connectDB = async () =>{

    try{

        await mongoose.connect(`mongodb://localhost:${process.env.PORT_MONGO}/${process.env.NAME_DATABASE}`)

        console.log("Conexion exitosa a mongo db")

    }catch(error){

        console.error("error " , error)
        process.exit(1)

    }


}