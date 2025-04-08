import fs from "fs"

console.log("before callback");
/*const callback = (err, data) => {
    if (err) {
        return console.log("error")
    } console.log(`File content\n------------- \n${data}`);
};*/

//fs.readFile("file.txt", callback);

fs.readFile("file.txt", (err, data) => {
    if (err) {
        return console.log("error");
    }
    console.log(`File content\n------------- \n${data}`);
})
console.log("after callback")