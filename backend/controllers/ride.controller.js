import { createRide } from "../services/ride.services.js";
import { validationResult } from "express-validator";

const rideDetails = async (req, res, next) => {
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
    return res.status(201).json(ride);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { rideDetails };
