const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema(
    {
      _id: Schema.Types.ObjectId,
      name: String,
      email: String,
      location: String,
      image: String,
      description: String,
      amenities: [String]
    }
)

const Apartments = mongoose.model('apartments', apartmentSchema); 

module.exports = {
  Apartments
};