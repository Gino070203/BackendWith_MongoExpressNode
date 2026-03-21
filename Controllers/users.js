import {userModel} from "../Models/user.js"

export class usersController{

    static async createUser(request,response){

        try {
            
            const {email,nombre,telefono,clave} = request.body

            const data = await userModel.createUser({email,nombre,telefono,clave})

            response.status(200).json(data)

        } catch (error) {

            response.status(500).send(error)
            
        }

    }


}