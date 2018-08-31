const Router = require('koa-router');
const NvService = require('../service/nv');
const Nv = new NvService();

let router = new Router({
    prefix: '/nv'
})

router.get('/num',async (ctx,next) => {
    let res = await Nv.getNum();
    ctx.body = res;
})

router.get('/:id', async (ctx, next) => {
    let res = await Nv.getNv(ctx.params.id);
    ctx.body = JSON.stringify(res);
})

router.get('/like/:string', async (ctx, next) => {
    let res = await Nv.getNvLike(ctx.params.string);
    ctx.body = JSON.stringify(res);
})

router.get('/list/:page', async (ctx, next) => {
    let res = await Nv.getList(ctx.params.page,ctx.query);
    ctx.body = JSON.stringify(res);
})


module.exports = router