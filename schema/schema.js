const { gql } = require('apollo-server-express')
require('../config/config')

const typeDefs = gql`
    type Apartments {
        name: String,
        email: String,
        location: String,
        image: String,
        description: String,
        amenities: [String]
    }

    type Query {
        getApartments: [Apartments]
    }

    type Mutation {
        addApartment(name: String!, email: String!, location: String!, image: String!, description: String!, amenities: [String]!): Apartments
    }
`;
  
module.exports = typeDefs