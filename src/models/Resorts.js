import mongoose from "mongoose";

const MountainSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  mountains: [{ type: String, required: true }],
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const MountainModel = mongoose.model("mountains", MountainSchema);
