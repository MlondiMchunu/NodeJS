//const http = require('http')
//const fs = require('fs')

//const _ = require('lodash')
/*
const server = http.createServer((req,res)=>{
   //res.write('Welcome Mlondi') 
   //res.end()
   //console.log(req)

   if(req.url === '/'){
    
    res.write("Connection succesfull, this is message from server")
    res.end('\nWElcome to our homepage')
   }
   if(req.url === '/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    html = fs.readFileSync('./about.html')
    res.end(html)
   }else{
   res.end('<h1>Oops!!</h1> <p>Page not available</>')
}})
server.listen(5000)
*/

//const items = [1,[2,[3,[4]]]]
//const newItems = _.flattenDeep(items)
//console.log(newItems)
//console.log('hello World')

/*const {readFile} = require('fs')

console.log('started a first task')

//check file path

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')
*/



/*console.log('first')
setTimeout(()=>{
    console.log('second')
},4000)
console.log('third')
*/

/*const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server listening on port : 5000..')
})*/

/*const { readFile, writeFile } = require('fs')

const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//this works better when reading 2 files

//remove promise if you want to include writeFile
/*const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
                //console.log('second + ', data)
            }
        })

    })
}
*/

//getText('./content/second.txt')
//       .then((result)=>console.log(result))
//       .catch((err)=>console.log(err))
//       console.log('third')
/*
const start = async () => {
    try {
        //const first = await getText('./content/second.txt');
        const first = await readFilePromise('./content/first.txt','utf8')
        //const second = await getText('./content/first.txt');
        const second = await readFilePromise('./content/second.txt','utf8')
        //console.log(first,second)

        await writeFilePromise('./content/file-sync.txt','Node is Good!')
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()

*/

/*const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log('data1 received','Mlondi','','074')
})
customEmitter.on('response',()=>{
    console.log('data2 received')
})

customEmitter.emit('response')
*/
const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result)
})