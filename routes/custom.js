const Router = require('koa-router');
const CustomService = require('../service/custom');
const Custom = new CustomService();

let router = new Router({
    prefix: '/nv'
})

router.post('/favor', async (ctx) => {
    let params = ctx.request.body;
    let res =await Custom.addFavor(params);
    ctx.body = res;
})

router.get('/user/favor', async (ctx) => {
   let params = ctx.query;
   let res = await Custom.getFavor(params);
   ctx.body = res;
})

module.exports = router;