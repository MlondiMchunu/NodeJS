const { request } = require("http");

const req = request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk : ${chunk}`);
  });
});
req.end();