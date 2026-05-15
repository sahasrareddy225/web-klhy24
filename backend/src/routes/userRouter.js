// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { protect } from '../middlewares/authMiddleware.js'
import { getUserDetails } from '../controllers/userController.js'; 
import { get } from 'mongoose';


const userRouter = Router();


userRouter.get("/me", protect, getUserDetails);
export default userRouter;