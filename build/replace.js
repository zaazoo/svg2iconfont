var fs = require('fs')
var path = require('path');

const rootDir = path.resolve(__dirname, '../')
var filePath = path.resolve(rootDir, 'dist/fonts/css/')

// readdir方法：读取文件名
// readFile方法：读取文件内容
// writeFile方法：改写文件内容
fs.readdir(filePath, 'utf8', function (err, data) {
  data.forEach(function (item, index) {
    // console.log('item', item)
    fs.readFile(filePath + '/' + item, 'utf8', function (err, files) {
      // console.log('files', files, err)
      var result = files.replace(/\/typeface/g, '../typeface');
      fs.writeFile(filePath + '/' + item, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    })
  });
});
