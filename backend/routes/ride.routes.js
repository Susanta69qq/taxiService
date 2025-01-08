import express from "express";
const router = express.Router();
import { body, query } from "express-validator";
import {
  confirmRide,
  getRideFare,
  rideDetails,
  startRide,
} from "../controllers/ride.controller.js";
import { authCaptain, authUser } from "../middlewares/auth.middleware.js";

router.post(
  "/create",
  authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "motorcycle"])
    .withMessage("Invalid vehicle type"),
  rideDetails
);

router.get(
  "/get-fare",
  authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  getRideFare
);

router.post(
  "/confirm",
  authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride id"),
  confirmRide
);

router.get(
  "/start-ride",
  authCaptain,
  query("rideId").isMongoId().withMessage("Invalid ride id"),
  query("otp")
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage("Invalid OTP"),
  startRide
);

export default router;
