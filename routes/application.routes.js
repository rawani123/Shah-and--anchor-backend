import express from "express";

import { applicationController, approveApplication } from "../controllers/application.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post('/apply',upload.single('photo'),applicationController)
router.post('/approve', approveApplication)

export default router;