const mongoose = require("mongoose");
const {
  encryptPassword,
  comparePassword,
} = require("../utils/encryptPassword");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    lastName: {
      type: String,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    encryptPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("password").set(function (password) {
  this.encryptPassword = encryptPassword(password);
});

userSchema.methods = {
  authenticatePassword: function (plainTextPassword) {
    return comparePassword(plainTextPassword, this.encryptPassword);
  },
};

module.exports = mongoose.model("User", userSchema);
