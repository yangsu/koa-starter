require("dotenv").config();

const { env } = process;

const appName = "project";

module.exports = {
  appName,
  port: env.PORT || 3000,
  mongoDbUrl: env.MONGODB_URI || `mongodb://localhost/${appName}`
};
