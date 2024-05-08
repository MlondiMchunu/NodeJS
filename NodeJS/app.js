const http = require('http')

const server = http.createServer((req,res)=>{
   res.write('Welcome Mlondi') 
   res.end()
   console.log(req)
})
server.listen(5000)
