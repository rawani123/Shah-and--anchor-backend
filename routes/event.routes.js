import express from 'express';
import { authentication } from '../middleware/auth.mid.js';
import { createEvent, getAllEvents } from '../controllers/even.controller.js';

const router = express.Router();

router.post('/create-event', authentication,createEvent)

router.post('/getAllEvents', authentication,getAllEvents)

export default router;