const functions = require('firebase-functions');

exports.helloPubSub = functions.pubsub.topic('howl').onPublish(event => {
    const pubSubMessage = event.data;
// Decode the PubSub Message body.
    const messageBody = pubSubMessage.data ? Buffer.from(pubSubMessage.data, 'base64').toString() : null;

    console.log(messageBody)

});