import express from "express";
import { deleteUser, getAllNotification, getAllUser, getUser, loginController, registerController, updateUser } from "../controllers/user.controller.js";
import { authentication } from "../middleware/auth.mid.js";
import admin from "../middleware/admin.mid.js";


const router = express.Router();

router.post("/register", registerController)

router.post("/login", loginController)

router.post('/getAllUser',authentication,admin,getAllUser)

router.post('/getUser',authentication,getUser)

router.post('/deleteUser/:id',authentication,admin,deleteUser)

router.post('/updateUser/:id',authentication,updateUser)

router.post('/see-notifications',authentication,getAllNotification)

export default router;