import mongoose from 'mongoose'
import parkingModel from '../models/admin.js'

export const createParkingSlots = async (req, res) => {
    const totalSlots = req.body.totalSlots;
    const availableSlots = req.body.availableSlots;
  
    const createParking = new parkingModel({
      totalSlots: totalSlots,
      availableSlots: availableSlots,
    });
  
    try {
      await createParking.save();
  
      res.status(201).json({
        message: "parking slots created",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };