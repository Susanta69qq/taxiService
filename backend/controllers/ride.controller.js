import {
  getAddressCoordinate,
  getCaptainsInTheRadius,
} from "../services/maps.service.js";
import { createRide, getFare, startRideService } from "../services/ride.services.js";
import { validationResult } from "express-validator";
import { sendMessageToSocketId } from "../socket.js";
import rideModel from "../models/ride.model.js";
import { confirmRideService } from "../services/ride.services.js";

const rideDetails = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);

    const pickupCoordinates = await getAddressCoordinate(pickup);

    const captainsInRadius = await getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      10
    );

    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");

    captainsInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getRideFare = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const confirmRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
    const ride = await confirmRideService({ rideId, captain: req.captain });

    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-confirmed",
      data: ride,
    });

    return res.status(200).json(ride);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const startRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId, otp } = req.query;

  try {
    const ride = await startRideService({ rideId, otp, captain: req.captain });

    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-started",
      data: ride,
    });

    return res.status(200).json(ride);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export { rideDetails, getRideFare, confirmRide, startRide };
