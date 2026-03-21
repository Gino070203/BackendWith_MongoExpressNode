import mongoose from "mongoose";
import usuarios from "../SchemasMongo/users.js"

export class userModel{

    static async createUser(user){
        return await usuarios.create(user)
    }


}