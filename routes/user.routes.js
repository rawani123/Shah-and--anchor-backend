import express from "express";
import { deleteUser, getAllUser, getUser, loginController, registerController, updateUser } from "../controllers/user.controller.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post("/register", registerController)

router.post("/login", loginController)

router.post('/getAllUser',authentication,getAllUser)

router.post('/getUser:id',authentication,getUser)

router.post('/deleteUser:id',authentication,updateUser)

router.post('/updateUser:id',authentication,deleteUser)

export default router;