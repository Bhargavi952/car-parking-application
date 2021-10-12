import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  vehicleNumber: { type: String , require: true },
  slotNumber: { type: Number, require: true },
});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;
