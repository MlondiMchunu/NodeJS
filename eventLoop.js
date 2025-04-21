console.log("One!");
console.log("Two!");

function logThree() {
    console.log("Three!");
}

function logThreeAndFour() {
    logThree();
    console.log("Four!");
}

logThreeAndFour();
console.log(1e10);

function longRunningTask() {

    let count = 0;
    for (let j = 0; j < 1e10; j++) {
        count++;
    }
    console.log("Long task done!");
}


function importantTask() {
    console.log("Important!");
}

longRunningTask();
importantTask();
console.log("Test")

setTimeout(() => {
    console.log("5000ms")
}, 5000)

setTimeout(() => {
    console.log("100ms")
}, 100)

console.log("End of script");