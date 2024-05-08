const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns system uotime in secs
console.log('System uptime is : ', os.uptime(),' seconds')