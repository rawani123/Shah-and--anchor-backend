import express from "express";

import { applicationController } from "../controllers/application.controller.js";

const router = express.Router();

router.post('/apply',applicationController)

export default router;