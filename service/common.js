const mysql = require('mysql');
const DB = require('../config/db');
const pool = mysql.createPool(DB);

let query = function(sql,values) {
    return new Promise( (resolve,reject) => {
        pool.getConnection( (err,connection) => {
            if(err) {
                reject(err)
            }else{
                connection.query(sql, values,(err,rows) => {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
}

module.exports = {
    query
}