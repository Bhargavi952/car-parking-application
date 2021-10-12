import express from "express";
const router = express.Router();

import { parkCar ,unparkVehicle ,getVehicleDetails } from "../controllers/customer.controller.js";

router.post("/book", parkCar);
router.delete("/unpark", unparkVehicle);
router.get("/details", getVehicleDetails);


export default router;
