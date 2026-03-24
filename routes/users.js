import { Router } from "express";

import { usersController } from "../Controllers/users.js";


export const userRouter = Router()

userRouter.post("/register",usersController.register)
userRouter.post("/login",usersController.login)