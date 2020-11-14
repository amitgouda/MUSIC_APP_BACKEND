const sendResponse = require("../../utils/sendResponse");
const Song = require("../../models/song.model");
const Album = require("../../models/album.model");

const create = async (req, res) => {
  const { title, singer, albumId, playTime, userData } = req.body;

  try {
    const isSongPresent = await Song.findOne({ title }, {});
    if (isSongPresent) {
      return sendResponse(res, 400, "Song is already present");
    }

    await Song({
      title,
      singer,
      playTime,
      albumId,
      createdBy: userData.uid,
    }).save();

    sendResponse(res, 200, {}, "Song has been successfully registered.");
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const createAlbum = async (req, res) => {
  const { title, userData } = req.body;

  try {
    const isAlbumPresent = await Album.findOne({ title }, {});
    if (isAlbumPresent) {
      return sendResponse(res, 400, "Song is already present");
    }

    await Album({
      title,
      createdBy: userData.uid,
    }).save();

    sendResponse(res, 200, {}, "Song has been successfully registered.");
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const getAll = async (req, res) => {
  try {
    const songs = await Song.aggregate([
      {
        $lookup: {
          from: "albums",
          foreignField: "_id",
          localField: "albumId",
          as: "albumData",
        },
      },
      { $unwind: "$albumData" },
      {
        $project: {
          albumnId: 0,
        },
      },
    ]);

    sendResponse(
      res,
      200,
      {
        data: songs || [],
      },
      ""
    );
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

module.exports = {
  create,
  getAll,
  createAlbum,
};
