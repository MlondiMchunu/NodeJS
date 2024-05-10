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

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server listening on port : 5000..')
})