const { query } = require('./common');
const MusicModel = require('../model/music');

class MusicDb {
  constructor(){
  }

  async getAll(){
    const sql = `select * from music`;
    let _arr = await query(sql);
    return _arr;
  }
  async getMusic(id){
    const sql = `select * from music where id = ${id}`;
    let res = await query(sql);
    console.log(res);
    return new MusicModel(res[0]);
  }
}

module.exports = MusicDb;
