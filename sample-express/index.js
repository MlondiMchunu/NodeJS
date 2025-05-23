var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import path from "path";
const app = express();
const port = 3000;
app.get('/hello', function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield routeHello();
        res.send(response);
    });
});
app.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield routeAPINames();
        }
        catch (err) {
            console.log(err);
        }
        // res.send(response);
    });
});
app.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
app.get("/components/weather", function (_req, res) {
    const filePath = path.join(process.cwd(), "public", "weather.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(filePath);
});
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
