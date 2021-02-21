var Promise = require('bluebird');

let student = {
    fristName: '邓',
    secondName: '云行',
    getName(cb) {
        let fullName = this.fristName + this.secondName
        // 第一个为错误对象，此时没有错误传递null
        cb(null, fullName)
    }
}
// 将一个对象上的所有方法全部转化为promise实现，并将原有函数名加上Async
Promise.promisifyAll(student);

student.getNameAsync().then(data => {
    console.log(data)
})
