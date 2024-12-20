import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectToDB from "./db/db.js";
const app = express();
const port = process.env.PORT || 3000;
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
