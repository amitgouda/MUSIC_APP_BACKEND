const sendResponse = require("../../utils/sendResponse");
const Playlist = require("../../models/playlist.model");

const create = async (req, res) => {
  const { name, songsIdArray, userData } = req.body;

  try {
    const isPlaylistPresent = await Playlist.findOne({ name }, {});
    if (isPlaylistPresent) {
      return sendResponse(res, 400, "Playlist is already present");
    }

    await Playlist({
      name,
      songsId: songsIdArray,
      createdBy: userData.uid,
    }).save();

    sendResponse(res, 200, {}, "Playlist has been successfully registered.");
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const getAll = async (req, res) => {
  try {
    const playlists = await Playlist.find();

    sendResponse(
      res,
      200,
      {
        data: playlists,
      },
      ""
    );
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const update = async (req, res) => {
  const { playListId, songsArray } = req.body;

  try {
    const playlists = await Playlist.findOneAndUpdate(
      { _id: playListId },
      { $set: { songsId: songsArray } }
    );

    sendResponse(
      res,
      200,
      {
        data: playlists,
      },
      "Successfully updated playlist"
    );
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const updateAccessMiddleware = async (req, res, next) => {
  const { playListId, userData } = req.body;

  try {
    const playlists = await Playlist.findOne({
      _id: playListId,
      createdBy: userData.uid,
    });

    if (playlists === null) {
      throw new Error("Access Denied");
    }
    next();
  } catch (error) {
    return sendResponse(
      res,
      403,
      {},
      error.message || "Something went wrong ,Please try again"
    );
  }
};

module.exports = {
  create,
  getAll,
  update,
  updateAccessMiddleware,
};
