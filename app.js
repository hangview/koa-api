const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');

const index = require('./routes/index');
const nvs = require('./routes/nv');
const custom = require('./routes/custom');
const music = require('./routes/music');

// error handler

// middlewares
app.use(cors({
  origin: ctx => '*',
}));
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'pug',
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(nvs.routes(), nvs.allowedMethods());
app.use(custom.routes(), custom.allowedMethods());
app.use(music.routes(), music.allowedMethods());

module.exports = app;
