const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');

const config = require('./config/config.json');
const { publicRouter, protectedRouter } = require('./routers');
const db = require('./models');

const app = new Koa();

app.context.db = db;
app.use(bodyParser());

// Default error catching if any promises throw errors
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // TODO: Need to add check for production env
    ctx.throw(err.status || 500, err);
  }
});

app.use(publicRouter.routes());
app.use(jwt({ secret: config.jwtSecret }));
app.use(protectedRouter.routes());
app.listen(config.port);
console.log(`SERVER LISTENING ON ${config.port}`);