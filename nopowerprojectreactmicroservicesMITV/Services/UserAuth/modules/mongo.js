const mongoose = require('mongoose');
require('dotenv').config();

const credentials = {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE
}

let connstring = "mongodb://" + credentials.username + ":" 
    + credentials.password + "@"
    + credentials.host + ":"
    + credentials.port + "/"
    + credentials.database
    + "?authSource=admin";

mongoose.connect( connstring, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    
    if(err){
        console.log("couldn't connect to database");
        console.log(err);
        return;
    }
    console.log("connected to db");
});

module.exports = mongoose;