const os = require('os')
const path = require('path')

//info about current user
const user = os.userInfo()
console.log(user)
 
//method returns system uotime in secs
console.log('System uptime is : ', os.uptime(),' seconds')

const currentOS = {
    name:os.type()
}

const filePath = path.join('/content','subfolder','test.txt')

console.log(currentOS)
console.log(filePath)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)