const express = require('express');

const url = process.env.MONGO_STRING

// define this as a route
const migrate = express.Router()

// connect to the database
const dbo = require('../conn/conn');

// get route for all records
migrate.route('/migrate').get(function (req, res) {
    // connect to database
    let db_connect = dbo.getDb('listingsAndReviews');

    db_connect

        // connect to collection
        .collection('listingsAndReviews')

        // find all
        .find().limit(1)

        // convert data to array
        .toArray(function (err, results) {
            if (err) throw err;
            res.json(results)
        })

})

module.exports = migrate
