require('dotenv').config()
require('../models/model')
const mongoose = require('mongoose');
const Listings = require('../models/model')

let Data = Listings.find({}).limit(50)

console.log(Data)

module.exports = Data
