import express from "express";
import { getAllUser, loginController, registerController } from "../controllers/user.controller.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post("/register", registerController)

router.post("/login", loginController)

router.post('/getAllUser',authentication,getAllUser)

export default router;