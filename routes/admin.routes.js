import express from 'express';
import { authentication } from '../middleware/auth.mid.js';
import admin from '../middleware/admin.mid.js';
import { approvingApplication } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/approve-sponsor',authentication,admin,approvingApplication)

export default router;