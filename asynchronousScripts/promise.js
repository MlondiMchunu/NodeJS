console.log("before function")
function fetchData(url) {
    console.log("inside function 1")
    fetch(url)//fetch api is promisebased by default
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => {
            console.error(`Error : ${error}`);
        });
        console.log("inside function2")
}
fetchData("https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc");
console.log("after function")