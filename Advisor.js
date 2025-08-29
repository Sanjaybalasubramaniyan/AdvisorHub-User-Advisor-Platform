import mongoose from "mongoose";

const AdvisorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    expertise: { type: String, required: true, trim: true }, // e.g., "Finance", "Career"
    bio: { type: String, default: "" },
    email: { type: String, required: true, lowercase: true, trim: true },
    ratePerHour: { type: Number, default: 0 },
    rating: { type: Number, min: 0, max: 5, default: 4.5 },
    slots: [{ type: String }] // e.g., "Mon 5-6pm"
  },
  { timestamps: true }
);

export default mongoose.model("Advisor", AdvisorSchema);
