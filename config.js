require("dotenv").config();

const { env } = process;

module.exports = {
  mongoDbUrl: env.MONGODB_URI || "mongodb://localhost/quiprupt-pulse"
};
