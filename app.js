const config = require("./config");
const responseTime = require("koa-response-time");
const logger = require("koa-logger");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const mongoose = require("mongoose");
const Router = require("koa-router");

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoDbUrl);

const router = new Router();

const app = new Koa();

router.get("/", async ctx => {
  ctx.body = "Hello World";
});

app
  .use(logger())
  .use(responseTime())
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(ctx => {
    ctx.status = 404;
    ctx.body = "Not Found";
  });

module.exports = app;
