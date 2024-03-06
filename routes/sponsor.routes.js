import express from "express";
import { deleteSponsor, getAllSponsors,getSponsorsByIndustry, getSponsor, sponsorController, updateSponsor } from "../controllers/sponsor.controller.js";
import { authentication } from "../middleware/auth.mid.js";
import admin from "../middleware/admin.mid.js";
// import {upload } from "../middleware/multer.middleware.js";
// import formidable from "express-formidable";
const router = express.Router();

router.post("/become-sponsor",authentication,sponsorController)
router.post('/getAllSponsors',authentication,getAllSponsors)

router.post('/getAllUnSponsors',authentication,admin,getAllUnSponsors)

router.post('/getSponsor/:id',authentication,getSponsor)

router.post('/updateSponsor/:id',authentication,updateSponsor)

router.post('/deleteSponsor/:id',authentication,deleteSponsor)

router.get('/getSponsorbyindustry/:industry', getSponsorsByIndustry);

export default router;