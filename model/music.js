class Music{
  constructor({id,imgUrl,musicUrl,title,artist}){
    this.id = id;
    this.cover = imgUrl;
    this.file = musicUrl;
    this.title = title;
    this.artist = artist;
  }
}

module.exports = Music;
