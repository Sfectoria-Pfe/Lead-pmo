import {NextFunction, Request,Response} from 'express'
import {hashSync , compareSync} from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secrets';
import { BadRequestsException } from '../exceptions/bad-requests';
import { ErrorCodes } from '../exceptions/root';
import { SignUpSchema } from '../schema/users';
import { NotFoundException } from '../exceptions/not-found';
import { prismaClient } from '..';




export const signup = async (req: Request  , res: Response, next: NextFunction) => {
    console.log( req.body)
     
        const { name , email, password } = req.body;

    let user = await prismaClient.user.findFirst({where: {email}})
    if (user) {
         new BadRequestsException('User already exists!', ErrorCodes.USER_ALREADY_EXISTS)
    }
    user = await prismaClient.user.create({
        data: {
            ...req.body,
            password: hashSync(password, 10)
        }
    })
    res.json(user)

    
}

export const login = async (req: Request  , res: Response) => {
    const { email, password} =req.body;

    let user = await prismaClient.user.findFirst({where: {email}})
    if (!user) {
        throw new NotFoundException('User not found!', ErrorCodes.USER_NOT_FOUND)
    }
    if(!compareSync(password, user.password)){
        throw new BadRequestsException('Incorrect Password!', ErrorCodes.INCORRECT_PASSWORD)
    }
    const token = jwt.sign({
        userId: user.id
    },JWT_SECRET)
   

    res.json({ token})


}

export const me = async (req: Request  , res: Response) => {
    

    res.json(req.user)


}