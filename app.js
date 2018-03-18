const Koa = require("koa");
const Router = require("koa-router");
const responseTime = require("koa-response-time");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const compress = require("koa-compress");
const { Z_SYNC_FLUSH } = require("zlib");

const app = new Koa();
const router = new Router();

router.get("/", async ctx => {
  ctx.body = "Hello World";
});

app
  .use(logger())
  .use(responseTime())
  .use(bodyParser())
  .use(
    compress({
      threshold: 2048,
      flush: Z_SYNC_FLUSH
    })
  )
  .use(router.routes())
  .use(router.allowedMethods())
  .use(ctx => {
    ctx.status = 404;
    ctx.body = "Not Found";
  });

module.exports = app;
