"use strict";
const sendResponse = require("../utils/sendResponse");
const authRoutes = require("./auth.routes");
const songRoutes = require("./song.routes");
const playlistRoutes = require("./playlist.routes");

module.exports = (app) => {
  app.use("/api/check", (req, res) => {
    sendResponse(res, 200, "working fine");
  });
  app.use("/api/auth", authRoutes);
  app.use("/api/song", songRoutes);
  app.use("/api/playlist", playlistRoutes);
};
