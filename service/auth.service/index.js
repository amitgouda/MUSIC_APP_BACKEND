const sendResponse = require("../../utils/sendResponse");
const { generateToken, getTokenDetails } = require("../../utils/auth");
const User = require("../../models/user.model");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const isUserPresent = await User.findOne({ email }, {});
    if (isUserPresent) {
      return sendResponse(res, 400, {},"User is already registered");
    }

    await User({
      firstName,
      lastName,
      email,
      password,
    }).save();

    sendResponse(res, 200, {}, "User has been successfully registered.");
  } catch (error) {
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      return sendResponse(res, 400, {}, "No user was found");
    }

    if (!userData.authenticatePassword(password)) {
      return sendResponse(res, 400, {}, "Please enter correct password");
    }

    const token = generateToken({ uid: userData._id });

    sendResponse(res, 200, { token, _id: userData._id, email });
  } catch (error) {
    console.log(error.message);
    return sendResponse(res, 400, {}, "Something went wrong ,Please try again");
  }
};

module.exports = {
  signUp,
  signIn,
};
