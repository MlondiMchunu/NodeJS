import express from "express";
import { routeHello, routeAPINames } from "./routes.js";

const app = express();
const port = 3000;

app.get('/hello', async function (req, res) {
    const response = await routeHello(req, res);
    res.send(response);
});

app.get("/api/names", async function (req, res) {
    let response;
    try {
        response = await routeAPINames(req, res);
    } catch (err) {
        console.log(err)
    }
    res.send(response);
})

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})