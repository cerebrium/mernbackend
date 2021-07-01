require('dotenv')
require('./config/config');
require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolvers')
const { Listings } = require('./models/model');

const port = process.env.PORT || 5000


// instantiate the apollo server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    tracing: true
});

// instantiate the express app after the apollo server
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(require("./routes/listings"))

server.applyMiddleware({ app });

app.listen(() => {
    console.log(`server listening on port: ${port}`)
})
