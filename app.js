const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');

const config = require('./config/config.json');
const protectedRouter = require('./protected-routes');
const publicRouter = require('./public-routes');
const db = require('./models');

const PORT = 8080
const app = new Koa();

app.context.db = db;
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.throw(err.status || 500, err);
  }
});

app.use(publicRouter.routes());
app.use(jwt({ secret: config.jwtSecret }));
app.use(protectedRouter.routes());
app.listen(PORT);
console.log(`SERVER LISTENING ON ${PORT}`);