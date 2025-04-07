let globalVar = "global";
function scope() {
    let foo = "1";
    let c;
    if (true) {

        let bar = c = "2";
    }
    console.log(globalVar);
    //console.log(window.globalVar);
    console.log(foo);
    console.log(c);
}
scope();