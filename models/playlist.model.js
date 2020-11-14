const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    songsId: {
      type: [
        {
          type: ObjectId,
          ref: "Song",
        },
      ],
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Playlist", playlistSchema);
