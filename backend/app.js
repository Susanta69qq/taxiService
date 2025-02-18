import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectToDB from "./db/db.js";
const app = express();
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import mapsRoutes from "./routes/maps.routes.js";
import rideRoutes from "./routes/ride.routes.js";

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//route for ping service and health checkup of backend service
app.get("/health", (req, res) => {
  res.status(200).send("Ok working");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes);

export default app;
