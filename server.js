require('dotenv').config()

const connect = require('connect')

const express = require('express');
const cors = require('cors');
const { ApolloServer, graphqlExpress } = require('apollo-server-express');

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

// app.use(
//     '/listings',
//     bodyParser.json(),
//     graphqlExpress( req => { 
//         schema: typeDefs
//     })
// )
app.use(require("./routes/migrate"))

server.applyMiddleware({ 
    app
});

// // driver connection
// const dbo = require('./conn/conn')

app.listen(port, () => {
    // connect to database when server starts
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})
