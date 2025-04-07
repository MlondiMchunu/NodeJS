//Synchronous Continuation Passing Style 
function addCPS(a, b, callback) {
    callback(a + b)
}
console.log('before function')
addCPS(1, 2, result => {
    console.log(`Result: ${result}`)
})
console.log('after function')

//Asynchronous CPS
function addAsync(a, b, callback) {
    setTimeout(() => callback(a + b), 3000)
}
console.log('---------------------------------------')
console.log('before')
addAsync(6, 9, result => {
    console.log(`Result: ${result}`)
})
console.log('after')