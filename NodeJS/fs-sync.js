const {readFileSync,writeFileSync,appendFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//console.log(first,'\n',second)

//writeFileSync('./content/file-sync.txt','Mlondi')
appendFileSync('./content/first.txt','Appended Text')


//const third = readFileSync('./content/file-sync.txt','utf8')

//console.log(third)

console.log('Done with this task')
console.log('Starting the next one')