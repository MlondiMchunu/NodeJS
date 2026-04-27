const amqp = require("amqplib");
connect();

async function connect(){
    try{
        const amqpServer = "amqps://bujxegjy:5NS7Dc1Z3yS8evcz-eEazC3mtTHp9HLm@gull.rmq.cloudamqp.com/bujxegjy"
        const connection = await amqp.connect(amqpServer);
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with input ${input.number}`);

            if(input.number == 7)
                channel.ack(message);
        })
        console.log("Waiting for messages...")
    }
    catch(ex){
        console.error(ex);
        
    }
}