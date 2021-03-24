const util = require('util');
const utils = require('../utils.js')

let str = "NodeJS";
let enc = utils.encrypt(str);
let dec = utils.decrypt(enc);

util.log("enc: ", enc); 
util.log("dec: ", dec); 

return; // 뒤에꺼 실행 x

let url = "https://naver.com";

utils.ogsinfo(url, (err, res) => {
  util.log(err, res); 
});