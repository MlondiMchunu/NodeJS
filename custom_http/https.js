const {send} = require('./request')
const response = require('./response')

function request(url, data) {
  send(url, data);
  return response.read();
}

const responseData = request('https://wwww.google.com','hello world')

console.log(responseData);