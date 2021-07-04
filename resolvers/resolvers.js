const { paginateResults } = require('../utils/utils');
const { Data } = require('../config/config')

module.exports = {
    Query: {
        getListings: (root) => {
            return new Promise((resolve, reject) => {
                Listings.find((err, listings) => {
                    if (err) reject(err);
                    else resolve(listings);
                })
            })
        }
    }
}
