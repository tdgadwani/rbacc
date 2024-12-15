import express from "express";
import { loginUser, logoutUser, signupUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signupUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(logoutUser);

export default userRouter;