require('dotenv').config()
const mongoose = require('mongoose');

// mongodb atlass url
const url = process.env.MONGO_STRING;

mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log(`Connected to mongo Atlas`));

