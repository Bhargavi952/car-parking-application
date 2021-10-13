import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoute from "./routes/admin.route.js";
import customerRoute from "./routes/customer.route.js";
import rateLimiter from "./middleware/rateLimit.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use(rateLimiter)

app.use("/parking", adminRoute);
app.use("/parking", customerRoute);
app.get("/",(req,res)=>{
  res.status(200).json({message:"Welcome to car parking system"})
})

const PORT = process.env.PORT || 8000;

const CONNECTION_URL =  process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port:${PORT}`))
  )
  .catch((err) => console.log(err));
