const ogs = require('open-graph-scraper');
const HashMap = require('hashmap');
const Crypto = require('crypto-js');
const SHA256 = ("crypto-js/sha256");

const EKey = "nodevue"; //보안 중요 -> 노출X

module.exports = {
  encrypt(data, key) { // data: 암호화되는 data, key: key값
    return Crypto.AES.encrypt(data, key || EKey).toString(); //AES양방향 암호화(SHA는 단방향)
  },
  decrypt(data, key) {
    return Crypto.AES.decrypt(data, key || EKey).toString(Crypto.enc.Utf8);
  },

  ogsinfo(url, func) {
    return ogs({url: url}, (err, res) => {
      func(err, res);
    }) 
  }
};