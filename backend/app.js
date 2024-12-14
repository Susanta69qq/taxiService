import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectToDB from "./db/db.js";
const app = express();
const port = process.env.PORT || 3000;
import userRoutes from "./routes/user.routes.js";

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
