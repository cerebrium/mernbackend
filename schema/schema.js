const { gql } = require('apollo-server-express')
require('../config/config')

const typeDefs = gql`
    type Apartments {
        name: String,
        email: String,
        location: String
    }

    type Query {
        getApartments: [Apartments]
    }

    type Mutation {
        addApartment(name: String!, email: String!, location: String!): Apartments
    }
`;
  
module.exports = typeDefs