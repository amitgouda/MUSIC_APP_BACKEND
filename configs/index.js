// load env variable
require("dotenv").config();

const {
  PORT,
  JWT_KEY,
  JWT_ALGORITHM,
  DB_NAME,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

module.exports = {
  PORT,
  JWT_KEY,
  JWT_ALGORITHM,
  DB_NAME,
  DB_PASSWORD,
  NODE_ENV
};
