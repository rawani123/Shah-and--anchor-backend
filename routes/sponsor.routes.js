import express from "express";
import { sponsorController } from "../controllers/sponsor.controller";

const router = express.Router();

router.post("/becomesponsor",sponsorController)

export default router;