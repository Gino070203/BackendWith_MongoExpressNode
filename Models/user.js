import mongoose from "mongoose";
import usuarios from "../SchemasMongo/users.js"

export class userModel{

    static async createUser(user){
        return await usuarios.create(user)
    }

    static async getAll(){
        return await usuarios.find(); 
    }

    static async getOne(email){
        return await usuarios.findOne(email)
    }

    static async updateUser(id,user){
        return await usuarios.findOneAndUpdate({_id : new mongoose.Types.ObjectId(id)},user)
    }

    static async deleteBook(id){
        return await usuarios.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)})
    }   

}