class Nv {
    constructor({
        userId=0,
        realName='',
        city='',
        height=0,
        weight=0,
        avatarUrl='',
        type='',
        totalFavorNum=0,
        totalFanNum=0,
        cardUrl='',
    },imgList=[],encode = true){
        this.userId = userId;
        this.realName = realName;
        this.city = city;
        this.height = height || 0;
        this.weight = weight || 0;
        this.type = type;
        this.totalFavorNum = totalFavorNum;
        this.totalFanNum = totalFanNum;
        this.avatarUrl = encode?encodeURIComponent(avatarUrl):decodeURIComponent(avatarUrl);
        this.cardUrl = encode?encodeURIComponent(cardUrl):decodeURIComponent(cardUrl);
        this.imgList = imgList;
    }
}

module.exports = Nv;