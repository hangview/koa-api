const mysql = require('mysql');
const getPageData = require('../model/originApi');
const Nv = require('../model/nv');
const DB = require('../config/db');
let lastAddPage = 0;
let TIME = '';

const pool  = mysql.createPool(DB)

async function main(num=1) {
    for(let i = num;i<1814;i++){
        await insertData(i);
        lastAddPage = i;
        console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  第${i}页添加成功`);
    }
}

main();

async function insertData(page) {
    try {
        let pageData = await getPageData(page);
        let nvs = pageData.pagebean.contentlist;
        pool.getConnection(function (err, connection) {
            nvs.forEach((nv) => {
                connection.query(insertUser(nv), (err, res, fields) => {
                    if (nv.imgList instanceof Array && nv.imgList.length > 0) {
                        nv.imgList.forEach(url => {
                            connection.query(insertPic(url, nv.userId, nv.realName), (err, res, fields) => {
                                if (err) throw  err;
                            })
                        })
                        // console.log(`------------ add ${nv.realName}  success    --------------------------`);
                    }
                    if (err) throw  err;
                })
            })
            connection.release();
        });
    }catch(err){
        if(TIME) clearTimeout(TIME);
        TIME = setTimeout(function(){
            let newPage = lastAddPage + 1;
            main(newPage);
        },3000)
    }
}

function insertUser(nv){
    const _nv = new Nv(nv);
    const sql = `insert into user set userId='${_nv.userId}',realName='${_nv.realName}',city='${_nv.city}',height=${_nv.height},weight=${_nv.weight},avatarUrl='${_nv.avatarUrl}',type='${_nv.type}',totalFavorNum=${_nv.totalFavorNum},totalFanNum=${_nv.totalFanNum},cardUrl='${_nv.cardUrl}'`;
    return sql;
}

function insertPic(url,userId,realName){
    return `insert into userImage set userId=${userId},realName='${realName}',url='${encodeURIComponent(url)}';`
}