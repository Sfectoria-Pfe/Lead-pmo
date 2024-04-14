import { Router } from "express";
import { login, me, signup } from "../controllers/auth";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middelwares/auth";


const authRoutes =Router()

authRoutes.post('/login', errorHandler(login))
authRoutes.post('/signup',errorHandler(signup))
authRoutes.get('/me', [authMiddleware],errorHandler(me))

export default authRoutes