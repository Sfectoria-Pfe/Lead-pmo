import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';




const prisma = new PrismaClient()
export const createList = async (req: Request, res: Response) => {
    try {
        const list = await prisma.list.create({
            data: {
                ...req.body
            }
        });
        res.status(201).json(list);
    } catch (error) {
        console.error("Error creating list:", error);
        res.status(500).json({ error: "Could not create list" });
    }
};

export const getListById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const list = await prisma.list.findUnique({
            where: { id: parseInt(id) },
            include: {
                tasks: true, 
                board: true 
            }
        });
        if (list) {
            res.status(200).json(list);
        } else {
            res.status(404).json({ error: "List not found" });
        }
    } catch (error) {
        console.error("Error fetching list:", error);
        res.status(500).json({ error: "Could not fetch list" });
    }
};


export const updateListById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedList = await prisma.list.update({
            where: { id: parseInt(id) },
            data: {
                ...req.body
            }
        });
        res.status(200).json(updatedList);
    } catch (error) {
        console.error("Error updating list:", error);
        res.status(500).json({ error: "Could not update list" });
    }
};

export const deleteListById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.list.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "List deleted successfully" });
    } catch (error) {
        console.error("Error deleting list:", error);
        res.status(500).json({ error: "Could not delete list" });
    }
};
