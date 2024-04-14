import { Request, Response } from "express";
import { prismaClient } from '..';
import { createBoardSchema } from '../schema/board';
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCodes } from "../exceptions/root";

export const createBoard = async (req: Request, res: Response) => {
    try {
        // Valider les données entrantes avec le schéma Zod
        const validatedData = createBoardSchema.parse(req.body);
       // Convertir projectId en nombre
        const projectId = parseInt(validatedData.projectId);

        // Recherche du projet associé au tableau (si nécessaire) et création du tableau dans la base de données
        const board = await prismaClient.board.create({
            data: {
                name: validatedData.name,
                project: {
                    connect: { id: projectId } // Relier le tableau au projet correspondant
                }
            }
        });

        res.json(board);
    } catch (error) {
        // Gérer les erreurs de validation ou d'accès à la base de données
        console.error("Error creating board:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
