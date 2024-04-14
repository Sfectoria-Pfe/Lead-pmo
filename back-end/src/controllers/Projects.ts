import { Request, Response, NextFunction } from "express";
import {prismaClient} from "..";



export const createProject = async (req: Request, res: Response) => {
    try {
        console.log( req.body)
        const { name,description } = req.body;
        const project = await prismaClient.project.create({
            data: {
                name,
                description
            }
        });
        res.status(201).json(project);
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: "Could not create project" });
    }
};





export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    // Get the project data from the database
    const project = await prismaClient.project.findUnique({
      where: { id: parseInt(id) },
    });
    // Check if the project exists
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    // Return the project
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

export const updateProjectById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      // Get the project data from the request body
      const projectData = req.body;
      // Update the project by id
      const updatedProject = await prismaClient.project.update({
        where: { id: parseInt(id) },
        data: projectData,
      });
      // Return the updated project
      res.status(200).json(updatedProject);
    } catch (error) {
      next(error);
    }
  };

export const deleteProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prismaClient.project.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error("Error deleting project:", error);
        res.status(500).json({ error: "Could not delete project" });
    }
};
