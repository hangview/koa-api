const request = require('request');

const url = "https://route.showapi.com/126-2";
const getPageData = function(page) {
    return new Promise((resolve,reject)=>{
        request.post({
            url: url, form: {
                showapi_appid: 52911,
                showapi_sign: "9db49b8e40dd4d8c927a47ed44672964",
                page: page,
            }
        }, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                resolve(JSON.parse(body).showapi_res_body);
            }else{
                reject(err);
            }
        });
    })
}

module.exports = getPageData;