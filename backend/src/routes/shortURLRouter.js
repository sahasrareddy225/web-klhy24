import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import createShortUrl, { redirectToLongUrl, updateShortUrl } from "../controllers/shortUrlController.js"


const shortURLRouter = Router();


shortURLRouter.post("/", protect, createShortUrl);
shortURLRouter.get("/:shortCode", redirectToLongUrl);
shortURLRouter.patch("/:shortCode", protect, updateShortUrl);

export default shortURLRouter;
