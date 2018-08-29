const router = require('koa-router')();
const musicList = require('../mock/music');

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

module.exports = router
