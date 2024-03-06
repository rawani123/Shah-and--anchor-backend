import express from "express";
import { deleteSponsor, getAllSponsors, getSponsor, sponsorController, updateSponsor } from "../controllers/sponsor.controller.js";
import { authentication } from "../middleware/auth.mid.js";
import {upload } from "../middleware/multer.middleware.js";
// import formidable from "express-formidable";
const router = express.Router();

router.post("/become-sponsor",sponsorController)
router.post('/getAllSponsors',authentication,getAllSponsors)

router.post('/getSponsor/:id',authentication,getSponsor)

router.post('/updateSponsor/:id',authentication,updateSponsor)

router.post('/deleteSponsor/:id',authentication,deleteSponsor)

export default router;