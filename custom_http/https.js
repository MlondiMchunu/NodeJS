const {send} = require('./request')
const response = require('./response')

function request(url, data) {
  send(url, data);
  return response.read();
}

request('https://wwww.google.com','hello world')