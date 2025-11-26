const parse = require('csv-parse')
const assert = require('assert')

const output = []

//create the parser
const parser = parse({
    delimiter:':'
})
//use the readable stream api
parser.on('readable',function(){
    let record
    while(record = parser.read()){
        output.push(record)
    }
})