import blacklistTokenModel from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";
import createCaptain from "../services/captain.service.js";
import { validationResult } from "express-validator";

const registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const doesCaptainExist = await captainModel.findOne({ email });

  if (doesCaptainExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ captain, token });
};

const loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    res.status(201).json({ captain, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

const logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token });

  res.clearCookie("token");

  res.status(200).json({ message: "Logged out successfully" });
};

export { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain };
