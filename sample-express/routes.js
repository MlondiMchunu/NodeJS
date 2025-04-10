import fetch from "node-fetch";

const routeHello = () => "Hello World";

const routeAPINames = async () => {
    const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc";
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    }catch(err){
        return err;
    }
}