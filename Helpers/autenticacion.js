import 'dotenv/config'
import jsonwebtoken from "jsonwebtoken"

export function generarToken(email){
   return jsonwebtoken.sign({email},process.env.JWT_SECRET,{expiresIn : '1h'})
}

export function verificarToken(request,response,next){

   const token = request.header('Authorization')?.replace('Bearer ','') 
   
   if(!token){
      return response.status(401).json({error : 'Token requerido'})   
   }

   console.log(token)

   try {
      
      const dataToken = jsonwebtoken.verify(token,process.env.JWT_SECRET)

      next()

   } catch (error) {
      response.status(401).json({error : 'Token no valido for gino'})   
   }
   

}
