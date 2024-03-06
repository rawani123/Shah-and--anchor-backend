import express from "express";
import { getAllSponsors, sponsorController } from "../controllers/sponsor.controller.js";
import { authentication } from "../middleware/auth.mid.js";
import {upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/become-sponsor",upload.single('video'),sponsorController)
router.post('/getAllSponsors',authentication,getAllSponsors)

export default router;