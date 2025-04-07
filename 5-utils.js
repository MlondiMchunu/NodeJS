const amount = require('./names')

if (amount < 10) {
    console.log('small number');
}
else { 
    console.log('large number'); 
}

console.log('You are '+amount)

const sayHi = (name)=>{
    console.log('Hello there ' + name)
   
}

module.exports = sayHi