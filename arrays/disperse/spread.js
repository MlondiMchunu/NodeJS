/*Object spread*/

let object = {
    fruit: "apple",
    color: "green"
}
let { fruit, color } = { ...object };

console.log(`fruit: ${fruit}, color: ${color}`)

color = "red";
console.log(`object.color: ${object.color}, color: ${color}`);

/*Array spread*/

let original = [1, 2, 3];
let cloned = [...original];

cloned[0] = "one";
cloned[1] = "two";
cloned[2] = "three";

console.log(`original: ${original}, cloned: ${cloned}`);