type responseItemType = {
    name: string;
    id: string;
};

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

interface WeatherQueryInterface {
    zipcode: string
}