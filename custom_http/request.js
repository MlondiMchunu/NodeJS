const REQUEST_TIMEOUT = 500;
const axios = require('axios');

axios.get('https://dummyjson.com/carts')
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        console.error('Error fetching data:', error);
    })
    .finally(()=>{
        console.log('Request completed.');
    })
function encrypt(data){
    return 'encrypted data'
}

function send(url,data){
const encryptedData= encrypt(data);
console.log(`sending ${encryptedData} to ${url}`)
}

module.exports= {
    REQUEST_TIMEOUT,
    send
}