var fs = require("fs");
var Promise = require('bluebird');
// 将一个库的所有方法全部转化为promise实现，并将原有函数名加上Async
Promise.promisifyAll(fs);
// 添加了一组以 Async 结尾的新方法
// for (const k in fs) {
//     if (k.endsWith('Async')) console.log(k)
// }
fs.readFileAsync('./file/水调歌头.txt').then(d => {
    console.log(d.toString())
})
