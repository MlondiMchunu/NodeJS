import fetch from "node-fetch";

//route for /hello endpoint
const routeHello = (): string => "Hello World";


/*use promise based fetch to get data from external API */
/**route for /api/names endpoint */
const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
        //console.log(data);
    } catch (err) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");


    return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType 

export { routeHello, routeAPINames }