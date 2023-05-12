const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const NoteSchema = Schema(
  {
    name: { type: String },
    createdDate: { type: Date, default: Date.now },
    details: { type: String },
  },

  { versionKey: false },
  { timestamp: true }
);

const UserSchema = Schema(
  {
    name: { type: String, required: ["First Name field is required"] },
    email: {
      type: String,
      required: ["Email field is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: ["Password field is required"],
      minlength: 8,
    },
    gender: { type: String, enum: ["male", "female", "rather not say"] },
    classes: [NoteSchema],
  },

  { versionKey: false },
  { timestamp: true }
);

module.exports = mongoose.model("User", UserSchema);
