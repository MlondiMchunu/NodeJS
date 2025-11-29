const { parse } = require("csv-parse");
const assert = require("assert");

const fs = require("fs");

const results = [];

fs.createReadStream("kepler_data.csv")
  .pipe(parse({
    comment:'#',
    columns:true,
  }))
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log("failed to read file : ", err);
  })
  .on("end", () => {
    console.log(results);
    console.log("Done!");
  });
