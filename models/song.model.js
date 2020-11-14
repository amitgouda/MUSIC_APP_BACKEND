const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    singer: {
      type: String,
      maxlength: 30,
      trim: true,
    },
    albumId: {
      type: ObjectId,
      ref: "Album",
    },
    playTime: {
      type: Number,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
