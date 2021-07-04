const { Apartments } = require('../models/model')

const resolvers = {
    Query: {
        getApartments: async () => await Apartments.find({}).exec()
    },
    Mutation: {
        addApartment: async (_, args) => {
            try {
                let response = await Apartments.create(args)
                return response
            } catch(e) {
                return e.message
            }
        }
    }
}

module.exports = resolvers