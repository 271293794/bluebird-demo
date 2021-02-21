// 普通 Promise用法
function add() {
    return Promise.resolve('字符串数据')
}
add().then(data => {
    // 输出：字符串数据
    console.log(data)
    return Promise.resolve(10)
}).then(data => {
    // 输出10
    console.log(data)
    return null
}).then(data => {
    // 输出null
    console.log(data)
})
