import express from "express";

import { applicationController, approveApplication, getAllAplllications } from "../controllers/application.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post('/apply', applicationController)
router.post('/approve', approveApplication)

router.post('/all-apply',authentication,getAllAplllications)

export default router;