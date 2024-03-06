import express from "express";
import { loginController, registerController } from "../controllers/user.controller.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post("/register", registerController)

router.post("/login", loginController)

router.post('/getUser',authentication)

export default router;