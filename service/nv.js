const { query } = require('./common');
const NvModel = require('../model/nv');

class NvDb {
    constructor(){
    }

    async getNum(){
        const sql = `select id from user`;
        let _arr = await query(sql);
        return _arr.length;
    }
    async getNv(userId){
        const sql = `select * from user left join userImage on user.userId=userImage.userId where user.userId=${userId}`;
        let _arr = await query(sql);
        let imgList = _arr[0].url?_arr.map(row => decodeURIComponent(row.url)):[];
        return new NvModel(_arr[0],imgList,false);
    }
    async getNvLike(string) {
        const sql = `select * from user where realName like '%${string}%'`;
        let _arr = await query(sql);
        return _arr.map(nv => new NvModel(nv,[],false));
    }

    async getList(page,params){
        let orderSql = '', typeSql = '', citySql = '';
        let limit = params && params.limit?params.limit:50;
        if(params && params.order){
            orderSql = ` order by ${params.order} desc `;
        }
        if(params && params.type ){
            typeSql = ` where type='${params.type}' `;
        }

        if(params && params.city ){
            citySql = ` city='${params.city}'`;
            citySql = typeSql?` and ${citySql} `:` where ${citySql}`;
        }

        const sql = `select * from user ${typeSql} ${citySql} ${orderSql} limit ${limit*(page-1)},${limit}`;
        let _arr = await query(sql);
        return _arr.map(nv => new NvModel(nv,[],false));
    }

}

module.exports = NvDb;