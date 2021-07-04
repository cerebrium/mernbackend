const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema(
    {
        name: String,
        email: String,
        location: String,
    }
)

const Apartments = mongoose.model('apartments', apartmentSchema); 

module.exports = {
  Apartments
};