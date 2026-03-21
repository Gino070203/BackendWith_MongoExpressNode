import {userModel} from "../Models/user.js"
import bcrypt from "bcrypt"

export class usersController{

    static async register(request,response){

        try {
            
            const {email,nombre,telefono,clave} = request.body

            const usuarioExiste = await userModel.getOne({email})

            if(usuarioExiste){
               return response.status(400).json({error : "el usuario ya existe"})    
            }

            const claveEncriptada = await bcrypt.hash(clave,10)

            const data = await userModel.createUser({email,nombre,telefono,clave : claveEncriptada})

            response.status(200).json(data)

        } catch (error) {

            response.status(500).send(error)
            
        }

    }

    static async login(request,response){


        const {email,clave} = request.body

        const usuarioExiste = await userModel.getOne({email})

        if(!usuarioExiste){
            return response.status(400).json({error : "el usuario no existe"})    
        }

        const claveValida = await bcrypt.compare(clave,usuarioExiste.clave)

        if(!claveValida){
            return response.status(400).json({error : "clave no valida"})    
        }

        return response.status(200).json({msg : "usuario existe"})

    }


}