import express from "express";

import { applicationController, approveApplication } from "../controllers/application.controller.js";

const router = express.Router();

router.post('/apply',applicationController)
router.post('/approve', approveApplication)

export default router;