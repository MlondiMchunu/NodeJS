/*RabbitMQ*/

const amqp = require("amqplib");
const { Buffer } = require("buffer");
const process = require("process");

const msg = {number: process.argv[2]}
connect();
async function connect(){
    try{
        const amqpServer = "amqps://bujxegjy:5NS7Dc1Z3yS8evcz-eEazC3mtTHp9HLm@gull.rmq.cloudamqp.com/bujxegjy"
        //"amqp://localhost:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent succesfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch(ex){

    }
}