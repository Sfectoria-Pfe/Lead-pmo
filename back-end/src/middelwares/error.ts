import { Request, Response , NextFunction } from "express";
import {  HttpException } from "../exceptions/root";

export const errorMiddleware = (error: HttpException, req:Request, res:Response, next: NextFunction ) =>
     res.status(error.statusCode).json ({
     message: error.message ,
     errorCodes: error.errorCode,
     errors: error.errors 
})