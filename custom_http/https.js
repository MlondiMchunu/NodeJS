const {send} = require('./request')
const read = require('./response')

function request(url, data) {
  send(url, data);
  return read();
}

const responseData = request('https://wwww.google.com','hello world')

console.log(responseData);