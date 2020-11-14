"use strict";
const express = require("express");
const songRoute = express.Router();
const songService = require("../service/song.service");
const { verifyToken } = require("../utils/auth");
const {
  createSongValidation,
  createAlbumValidation,
  validate,
} = require("../utils/validation");

songRoute.post(
  "/create",
  verifyToken,
  createSongValidation(),
  validate,
  songService.create
);
songRoute.get("/allSong", songService.getAll);
songRoute.post(
  "/createAlbum",
  verifyToken,
  createAlbumValidation(),
  validate,
  songService.createAlbum
);

module.exports = songRoute;
