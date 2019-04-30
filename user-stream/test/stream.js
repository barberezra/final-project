var Stream = require('./index.js');
var stream = new Stream({
    consumer_key: 'm9gp2aI7YcW72ryvhCMXtcXF8',
    consumer_secret: 'zI4qpF1Eqy1DRrOsVQSCEQsaJKDTQlKTyjCRDFo14NYpT3csDG',
    access_token_key: '1118191485063614465-BCXVl0wjzUyCknBlAz9BOZQWn4iSOv',
    access_token_secret: 'i5PPDFZvXgu9p0kRhIQdYB0JCyJgXFDs3xR9dJhgX8HU0'
});

 // * - data
 // * - garbage
 // * - close
 // * - error
 // * - connected
 // * - heartbeat

//create stream
stream.stream();

//stream JSON data
stream.on('data', function(data){
    console.log('Data:');
    console.log(data);
});

//incorrect json strings (can't parse to json)
stream.on('garbage', function(data){
    console.log('Can\'t be formatted:');
    console.log(data);
});

//heartbeats
stream.on('heartbeat', function(){
    console.log('Heartbeat');
});

//connected
stream.on('connected', function(){
    console.log('Stream created');
});

//connection errors (request || response)
stream.on('error', function(error){
    console.log('Connection error:');
    console.log(error);
});

//stream close event
stream.on('close', function(error){
    console.log('Stream closed');
    console.log(error);
});