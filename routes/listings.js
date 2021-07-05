const express = require('express');

// define this as a route
const listings = express.Router()

// get route for all records
listings.route('/listings:id').post(function (req, res) {
    res.send('connected to the listings route')

})

module.exports = listings
