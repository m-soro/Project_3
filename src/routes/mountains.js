import express from "express";
import mongoose from "mongoose";
import { MountainModel } from "../models/Resorts.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// retrun all the saved mountain
router.get("/", async (req, res) => {
  try {
    const response = await MountainModel.find({});
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

// create mountain list
router.post("/", async (req, res) => {
  const mountain = new MountainModel(req.body);
  try {
    const response = await mountain.save();
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

// save the mountain that uses selected to the users saved mountains array
router.put("/", async (req, res) => {
  // in the model, change the userSchema to add the mountainId
  try {
    const mountain = await MountainModel.findById(req.body.mountainID);
    const user = await UserModel.findById(req.body.userID);
    user.savedMountains.push(mountain);
    await user.save();
    res.json({ savedMountains: user.savedMountains });
  } catch (error) {
    console.error(error);
  }
});

router.get("/savedMountains/ids", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({ savedMountains: user?.savedMountains });
  } catch (error) {
    res.json(error);
  }
});

router.get("/savedMountains", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedMountains = await MountainModel.find({
      // grab the savedMountains where the id is inside the user savedMountains
      _id: { $in: user.savedMountains },
    });
    res.json({ savedMountains: user?.savedMountains });
  } catch (error) {
    res.json(error);
  }
});

export { router as mountainRouter };
