import parkingModel from "../models/admin.js";
import customerModel from "../models/customer.js";

/*********************************************************************************************************** */

//Park a Car

export const parkCar = async (req, res) => {
  const vehicleNumber = req.body.vehicleNumber;

  // Checking parking slots are available or not
  const isAvailable = await parkingModel.find({}).lean().exec();z

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

  const totalSlot = { totalSlots: 20 };
  const update = await parkingModel.findOneAndUpdate(totalSlot, createParking, {
    new: true,
  });

  // console.log(update, totalSlot, createParking);
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

/*********************************************************************************************************** */

//  Unpark the Car

export const unparkVehicle = async (req, res) => {
  const slotNo = { slotNumber: req.body.slotNumber };

  // checking if given slotNumber is present or not ?
  const isThere = await customerModel.findOne(slotNo);

  if (!isThere) {
    return res.status(404).json({ message: "Please enter proper Slot Number" });
  }

  await customerModel.findOneAndDelete(slotNo);

  res.send("You've succesfully Unparked the car");

  // to upadte parking slots

  const isAvailable = await parkingModel.find({}).lean().exec();

  const createParking = {
    availableSlots: isAvailable[0].availableSlots + 1,
  };

  const search = { totalSlots: 50 };
  const update = await parkingModel.findOneAndUpdate(search, createParking, {
    new: true,
  });

  try {
    await update.save();
    res.status(201).json({
      message: "You've succesfully Unparked the car",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/*********************************************************************************************************** */

// Get the Car/Slot Information


export const getVehicleDetails = async (req, res) => {
  try {
    const getDetails = await customerModel.find();
    res.status(200).send({ getDetails });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};