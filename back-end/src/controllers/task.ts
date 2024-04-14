import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient()
export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await prisma.task.create({

            data: {
                ...req.body
            }
        });
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Could not create task" });
    }
};


export const getTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const task = await prisma.task.findUnique({

            where: { id: parseInt(id) },
            include: {
                list: true // Include list associated with the task
            }
        });
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ error: "Could not fetch task" });
    }
};

export const updateTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedTask = await prisma.task.update({

            where: { id: parseInt(id) },
            data: {
                ...req.body
            }
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Could not update task" });
    }
};


export const deleteTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Could not delete task" });
    }
};
