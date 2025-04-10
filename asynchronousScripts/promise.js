console.log("before function")
function fetchData(url) {
    console.log("inside function 1")
    fetch(url)//fetch api is promise based by default
        .then((response) => response.json()) //then called when promise is resolved
        .then((json) => console.log(json))
        .then((fulfilled)=> console.log("promise fulfilled"))
        .catch((error) => { //catch called when promise is rejected
            console.error(`Error : ${error}`);
        });
        console.log("inside function2")
}
fetchData("https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc_limit=2");
console.log("after function")