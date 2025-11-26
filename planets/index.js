const { parse } = require("csv-parse");
const assert = require("assert");

const fs = require("fs");

const results = [];

fs.createReadStream("kepler_data.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
