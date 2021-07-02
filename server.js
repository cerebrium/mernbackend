require('./config/config');
require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolvers')

const port = process.env.PORT || 4000


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
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
