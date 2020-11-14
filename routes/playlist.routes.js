"use strict";
const express = require("express");
const playlistRoute = express.Router();
const playlistService = require("../service/playlist.service");
const {verifyToken} =  require('../utils/auth')
const {
    createPlaylistValidation,
    updatePlaylistValidation,
    validate,
  } = require("../utils/validation");

playlistRoute.post("/create", verifyToken, createPlaylistValidation(),validate, playlistService.create);
playlistRoute.get("/all", playlistService.getAll);
playlistRoute.post("/update",verifyToken,updatePlaylistValidation(),validate,playlistService.updateAccessMiddleware ,playlistService.update);


module.exports = playlistRoute;