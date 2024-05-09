const http = require('http')
const fs = require('fs')

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
