import express from "express";
import { routeHello, routeAPINames } from "./routes";

const app = express();
const port = 3000;

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})