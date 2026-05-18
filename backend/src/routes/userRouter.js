// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { protect } from '../middlewares/authMiddleware.js'
import { getUserDetails, getMyUrls } from '../controllers/userController.js'; 
import { get } from 'mongoose';


const userRouter = Router();


userRouter.get("/me", protect, getUserDetails);
userRouter.get("/my/urls", protect, getMyUrls);

export default userRouter;