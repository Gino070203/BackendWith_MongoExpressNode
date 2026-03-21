import {userModel} from "../Models/user.js"
import bcrypt from "bcrypt"

export class usersController{

    static async register(request,response){

        try {
            
            const {email,nombre,telefono,clave} = request.body

            const usuarioExiste = await userModel.getOne({email})

            if(usuarioExiste){
                response.status(400).json({error : "el usuario ya existe"})    
            }

            const claveEncriptada = await bcrypt.hash(clave,10)

            const data = await userModel.createUser({email,nombre,telefono,clave : claveEncriptada})

            response.status(200).json(data)

        } catch (error) {

            response.status(500).send(error)
            
        }

    }


}