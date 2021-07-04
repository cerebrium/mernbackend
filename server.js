require('./config/config');
require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require("mongoose")

// grapqhl 
const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolvers')

// env strings
const port = process.env.PORT || 4000
const url = process.env.MONGO_STRING;


// instantiate the apollo server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    tracing: true
});

// connect to mongo atlas

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);

mongoose.connection.on('error', function (err) {
    console.log("error connectiong to database: ", err)
})

mongoose.connection.on("open", function() {
    console.log('successfully connected to mongo atlas')
})

// instantiate the express app after the apollo server
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(require("./routes/listings"))

server.applyMiddleware({ app });

app.listen(() => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
