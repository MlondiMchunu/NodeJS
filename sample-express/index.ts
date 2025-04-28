import express, { Request, Response } from "express";
import { routeHello, routeAPINames, routeWeather } from "./routes.js";

import path from "path";

const app = express();
const port = 3000;

app.get('/hello', async function (_req: Request, res: Response): Promise<void> {
    const response = await routeHello();
    res.send(response);
});

app.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
    let response;
    try {
        response = await routeAPINames();
    } catch (err) {
        console.log(err)
    }
    // res.send(response);
})

app.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
})

app.get("/components/weather",function(_req:Request,res:Response):void{
    const filePath = path.join(process.cwd(),"public","weather.html");
    res.setHeader("Content-Type","text/html");
    res.sendFile(filePath);	
	});

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})
