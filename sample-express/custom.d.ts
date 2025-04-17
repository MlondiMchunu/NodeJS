type responseItemType  ={
    id: string;
    name: string;
};

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

interface WeatherQueryINterface {
    zipcode: string
}