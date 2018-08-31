const { query } = require('./common');

class CustomDb {
    constructor(){
        this.favorDbName = 'customFavor';
    }

    async addFavor({userId,type,value,mark}){
        const sql = `insert into ${this.favorDbName} (userId,type,value,mark) values ('${userId}','${type}','${value}','${mark}') `;
        let res = await query(sql);
        return res;
    }

    async getFavor({userId,type,limit=20,page}){
        let sql = `select * from ${this.favorDbName} where userId=${userId} `;
        if(type) sql += ` and type='${type}' `;
        if(page) sql += ` limit ${limit*(page-1)},${limit} `;
        let res = await query(sql);
        return res;

    }

}

module.exports = CustomDb;