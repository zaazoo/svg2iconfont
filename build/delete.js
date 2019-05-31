const fs = require('fs')
const path = require('path');
const iconfontDir = path.resolve(__dirname, '../../../src/assets/s2f-iconfont')
const base64Dir = path.resolve(__dirname, '../../../src/assets/s2f-base64')

fs.unlink(iconfontDir + '/font.js', function (err) {});
fs.unlink(iconfontDir + '/index.html', function (err) {});
fs.unlink(iconfontDir + '/main.js', function (err) {});

fs.unlink(base64Dir + '/index.html', function (err) {});
fs.unlink(base64Dir + '/main.js', function (err) {});
