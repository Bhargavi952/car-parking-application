import parkingModel from "../models/admin.js";
import customerModel from "../models/customer.js";

export const parkCar = async (req, res) => {
  const vehicleNumber = req.body.vehicleNumber;

  // Checking parking slots are available or not
  const isAvailable = await parkingModel.find({}).lean().exec();

  // If parking slots are full then return a message as parking slots are full

  
  if (isAvailable[0].availableSlots == 0)
    return res.status(404).json({ message: "Parking Slots are full" });

  const newCustomer = new customerModel({
    vehicleNumber: vehicleNumber,
    slotNumber: isAvailable[0].availableSlots,
  });

  // updating parking model

  const createParking = {
    availableSlots: isAvailable[0].availableSlots - 1,
  };

  const filter = { totalSlots: 20 };
  const update = await parkingModel.findOneAndUpdate(filter, createParking, {
    new: true,
  });

  // console.log(update, filter, createParking);
  try {
    await newCustomer.save();
    await update.save();

    res.status(201).json({
      message: "You've succesfully booked parking slot",
      slot: newCustomer,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
