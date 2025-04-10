async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json()
        console.log(json);
    } catch (error) {
        return new Error(error);
    }
}
fetchData("https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc_limit=2")