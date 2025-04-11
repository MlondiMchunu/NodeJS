import fetch from "node-fetch";

//route for /hello endpoint
const routeHello = () => "Hello World";


/*use promise based fetch to get data from external API */
/**route for /api/names endpoint */
const routeAPINames = async () => {
    const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
        //console.log(data);
    } catch (err) {
        return err;
    }
    const orgs = data.organizations;
    const names = orgs
        .map((item) => `name: ${item.name}, city: ${item.city}`)
        .join("<br>");


    return names;
};

export { routeHello, routeAPINames }