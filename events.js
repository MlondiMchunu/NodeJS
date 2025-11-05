const EventEmitter = require("events");
const celebrity = new EventEmitter();


// Subscribe to celebrity for Observer 1
celebrity.on("race win",()=>{
    console.log('Congratulations!')
})

// Subscribe to celebrity for Observer 2
celebrity.on("race win",()=>{
    console.log('Boo, I could have done better!')
})


celebrity.emit("race win");