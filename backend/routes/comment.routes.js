import express from "express";
import { fetchComments, postComment } from "../controllers/comment.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const commentRouter = express.Router();

commentRouter.route("/postComment").post(authMiddleware(["admin", "user"]),postComment);
commentRouter.route("/fetchComments/:questionId").get(authMiddleware(["admin", "user"]), fetchComments);

export default commentRouter;