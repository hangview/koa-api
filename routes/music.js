const Router = require('koa-router');
const MusicService = require('../service/music');
const Music = new MusicService();

let router = new Router({
  prefix: '/music',
});

router.get('/all', async (ctx, next) => {
  let res = await Music.getAll();
  ctx.body = res;
});
router.get('/:id', async (ctx, next) => {
  let res = await Music.getMusic(ctx.params.id);
  ctx.body = res;
});

module.exports = router;
