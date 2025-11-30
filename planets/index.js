const { parse } = require("csv-parse");
const assert = require("assert");

const fs = require("fs");

const results = [];

const isHabitablePlanet = (planet) => {
  return planet["koi_disposition"] === "CONFIRMED"
  && planet['koi_insol']> 0.36 & planet['koi_insol'] < 1.11;
};

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      results.push(data);
    }
  })
  .on("error", (err) => {
    console.log("failed to read file : ", err);
  })
  .on("end", () => {
    console.log(results);
    console.log("Done!");
  });
