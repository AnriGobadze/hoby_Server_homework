import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 50, required: [true, "name is required"] },
    description: { type: String, trim: true, maxlength: 500 },
    category: { type: String, enum: ["sports", "arts", "music", "gaming", "reading", "other"] },
    frequency: { type: String, enum: ["daily", "weekly", "monthly", "rarely"] },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Hobby", hobbySchema);
