import { Router } from "express"; 
import { errorHandler } from "../error-handler";
import { createProject, getProjectById, updateProjectById, deleteProjectById } from "../controllers/Projects";
import authMiddleware from "../middelwares/auth";
import projectManagerMiddleware from "../middelwares/projectmanager";

const projectRouter: Router = Router(); // Changed variable name to projectRouter

// Middleware pour vérifier l'authentification et le rôle de gestionnaire de projet
const authAndProjectManagerMiddleware = [authMiddleware, projectManagerMiddleware];

// Créer un nouveau projet
projectRouter.post("/projectscreate", authAndProjectManagerMiddleware, errorHandler(createProject));

// Obtenir un projet par son ID
projectRouter.get("/projects/:id", errorHandler(getProjectById));

// Mettre à jour un projet par son ID
projectRouter.put("/projects/:id", authAndProjectManagerMiddleware, errorHandler(updateProjectById));

// Supprimer un projet par son ID
projectRouter.delete("/projects/:id", authAndProjectManagerMiddleware, errorHandler(deleteProjectById));

export default projectRouter;
