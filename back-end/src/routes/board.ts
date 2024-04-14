import { Router } from 'express';
import { errorHandler } from '../error-handler';
import authMiddleware from "../middelwares/auth";
import { createBoard } from '../controllers/board';

const boardRoutes: Router = Router();

// Route pour créer un tableau
boardRoutes.post('/boardcreate', [authMiddleware], errorHandler(createBoard));

// // Route pour récupérer tous les tableaux
// boardRoutes.get('/', [authMiddleware, errorHandler(getAllBoards)]);

// // Route pour récupérer un tableau par son ID
// boardRoutes.get('/:id', [authMiddleware, errorHandler(getBoardById)]);

// // Route pour mettre à jour un tableau par son ID
// boardRoutes.put('/:id', [authMiddleware, errorHandler(updateBoardById)]);

// // Route pour supprimer un tableau par son ID
// boardRoutes.delete('/:id', [authMiddleware, errorHandler(deleteBoardById)]);

export default boardRoutes;
