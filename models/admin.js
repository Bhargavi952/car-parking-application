import mongoose from "mongoose";

const parkingSchema = mongoose.Schema({
  totalSlots: { type: Number, require: true },
  availableSlots: { type: Number, require: true },

});

const parkingModel = mongoose.model("parking", parkingSchema);

export default  parkingModel
