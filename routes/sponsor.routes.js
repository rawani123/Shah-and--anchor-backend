import express from "express";
import { getAllSponsors, sponsorController } from "../controllers/sponsor.controller.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post("/become-sponsor",sponsorController)
router.post('/getAllSponsors',authentication,getAllSponsors)

export default router;