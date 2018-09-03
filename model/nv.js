const mergeUrl = (url) => {
    if(url && url.slice(0,4) != 'http'){
        url = 'http:' + url;
    }
    return url
}
class Nv {
    constructor({
        userId=0,
        realName='',
        city='',
        height,
        weight,
        avatarUrl='',
        type='',
        totalFavorNum=0,
        totalFanNum=0,
        cardUrl='',
        hasImg=1,
    },imgList=[],encode = true){
        this.userId = userId;
        this.realName = realName;
        this.city = city;
        this.height = height || 0;
        this.weight = weight || 0;
        this.type = type;
        this.hasImg = hasImg;
        this.totalFavorNum = totalFavorNum;
        this.totalFanNum = totalFanNum;
        this.avatarUrl = encode?encodeURIComponent(avatarUrl):decodeURIComponent(avatarUrl);
        this.cardUrl = encode?encodeURIComponent(cardUrl):decodeURIComponent(cardUrl);
        if(imgList instanceof Array && imgList.length >0) {
            this.imgList = imgList.map(url => mergeUrl(url));
        }
        if(!encode) {
            this.avatarUrl = mergeUrl(this.avatarUrl);
            this.cardUrl = mergeUrl(this.cardUrl);
        }
    }
}

module.exports = Nv;