import express from "express";
import { sponsorController } from "../controllers/sponsor.controller.js";

const router = express.Router();

router.post("/become-sponsor",sponsorController)

export default router;