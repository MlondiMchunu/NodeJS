import fetch from "node-fetch";

//route for /hello endpoint
const routeHello = (): string => "Hello World";


/*use promise based fetch to get data from external API */
/**route for /api/names endpoint */
const routeAPINames = async (): Promise<string> => {
    const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
        //console.log(data);
    } catch (err) {
        return "Error";
    }
    const orgs = data.organizations;
    const names = orgs
        .map((item) => `name: ${item.name}, city: ${item.city}`)
        .join("<br>");


    return names;
};

const routeWeather = (query: WeatherQueryInterface):WeatherDetailType 

export { routeHello, routeAPINames }