require("dotenv").config();

const { env } = process;

const appName = "quiprupt-pulse";

module.exports = {
  appName,
  port: env.PORT || 3000,
  mongoDbUrl: env.MONGODB_URI || "mongodb://localhost/quiprupt-pulse"
};
