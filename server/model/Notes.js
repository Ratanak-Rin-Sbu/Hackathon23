const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const NoteSchema = Schema(
  {
    name: { type: String },
    createdDate: Date.now(),
    details: { type: String },
  },

  { versionKey: false },
  { timestamp: true }
);

module.exports = mongoose.model("Note", NoteSchema);