import express from "express";
import { deleteSponsor, getAllSponsors, getSponsor, sponsorController, updateSponsor } from "../controllers/sponsor.controller.js";
import { authentication } from "../middleware/auth.mid.js";

const router = express.Router();

router.post("/become-sponsor",sponsorController)
router.post('/getAllSponsors',authentication,getAllSponsors)
router.post('/updateSponsor', authentication,updateSponsor)
router.post('/getSponsor',authentication,getSponsor)
router.post('/updateSponsor',authentication,updateSponsor)
router.post('/deleteSponsor',authentication,deleteSponsor)

export default router;