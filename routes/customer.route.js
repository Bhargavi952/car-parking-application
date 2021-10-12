import express from "express";
const router = express.Router();

import { parkCar } from "../controllers/customer.controller.js";

router.post("/book", parkCar);

export default router;
