const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = process.env.MONGO_STRING;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));