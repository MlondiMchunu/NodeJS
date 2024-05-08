const {readFile,writeFile,appendFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        appendFile('./content/file-sync.txt',' Appended Data',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
        
    })
}

)