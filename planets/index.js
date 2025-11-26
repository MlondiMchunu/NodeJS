const parse = require('csv-parse')
const assert = require('assert')

const output = []

//create the parser
const parser = parse({
    delimiter:':'
})