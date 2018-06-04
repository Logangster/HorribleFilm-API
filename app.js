const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');

const { config, protectedRoutes, publicRoutes } = require('./config');
const db = require('./models');

const PORT = 8080
const app = new Koa();

app.context.db = db;
app.use(bodyParser());

// Default error catching if any promises throw errors
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.throw(err.status || 500, err);
  }
});

app.use(publicRoutes.routes());
app.use(jwt({ secret: config.jwtSecret }));
app.use(protectedRoutes.routes());
app.listen(PORT);
console.log(`SERVER LISTENING ON ${PORT}`);