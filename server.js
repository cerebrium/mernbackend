require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

// grapqhl 
const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolvers');

// env strings
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
app.use(require("./routes/migrate"))

server.applyMiddleware({ 
    app
});

// driver connection
const dbo = require('./conn/conn')

app.listen(port, () => {
    // connect to database when server starts
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})
