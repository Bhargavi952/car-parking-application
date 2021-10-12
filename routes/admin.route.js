import express from "express";
const router = express.Router();

import {createParkingSlots} from '../controllers/admin.controller.js'

router.post("/create/slots", createParkingSlots);

export default router;