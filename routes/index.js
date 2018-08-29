const Router = require('koa-router');
const musicList = require('../mock/music');
let router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/api/fetchList', async (ctx, next) => {
  ctx.body = musicList;
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router = new Router({
  prefix: '/api/list'
})

router.get('/:id', async (ctx, next) => {
  ctx.body = musicList[ctx.params.id];
})

module.exports = router
