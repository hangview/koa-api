const { query } = require('./common');
const NvModel = require('../model/nv');

class NvDb {
    constructor(){
    }
    async getNv(userId){
        const sql = `select * from user left join userImage on user.userId=userImage.userId where user.userId=${userId}`;
        let _arr = await query(sql);
        let imgList = _arr.map(row => decodeURIComponent(row.url));
        return new NvModel(_arr[0],imgList,false);
    }
    getNvLike(string) {
        const sql = `select * from user where realName like '%${string}%'`;
        return query(sql);
    }
}

module.exports = NvDb;