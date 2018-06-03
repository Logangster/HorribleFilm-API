const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');

const PORT = 8080
const app = new Koa();
const db = require('./models');

app.context.db = db;
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.throw(err.status || 500, err);
  }
});

app.use(router.routes());
app.listen(PORT);
console.log(`SERVER LISTENING ON ${PORT}`);