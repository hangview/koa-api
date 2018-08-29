const Router = require('koa-router');
const musicList = require('../mock/music');
let router = new Router();

router = new Router({
  prefix: '/api'
})

router.get('/fetchList', async (ctx, next) => {
  ctx.body = musicList;
})

router.get('/list/:id', async (ctx, next) => {
  ctx.body = musicList[ctx.params.id - 1];
})

module.exports = router
