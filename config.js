require("dotenv").config();

const { name } = require("./package.json");

const { env } = process;

module.exports = {
  port: env.PORT || 3000,
  mongoDbUrl: env.MONGODB_URI || `mongodb://localhost/${name}`
};
