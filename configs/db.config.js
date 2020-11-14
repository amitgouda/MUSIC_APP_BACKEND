const mongoose = require("mongoose");
const { DB_PASSWORD, DB_NAME, NODE_ENV } = require("./index");

const mongoUriString =
  NODE_ENV === "development"
    ? `mongodb://localhost:27017/${DB_NAME}`
    : `mongodb+srv://miki:${DB_PASSWORD}@clustermern.ug1ir.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectMongoose = () =>
  mongoose.connect(mongoUriString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

// If the connection throws an error
mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

module.exports = connectMongoose;
