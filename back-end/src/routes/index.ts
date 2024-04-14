import express from 'express';
import authRoutes from '../routes/auth';
import projectRoutes from "./projects";
import boardRoutes from './board';



const rootRouter = express.Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/projects', projectRoutes)
rootRouter.use('/board', boardRoutes)



export default rootRouter;
