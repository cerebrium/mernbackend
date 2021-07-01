const mongoose = require('mongoose');
const { Schema } = mongoose;

const AmenitiesSchema = new Schema ({
    number: String
});

const GeoLocationSchema = new Schema ({
    number: Number
});

const ImagesSchema = new Schema ({
    thumbnail_url: String,
    medium_url: String,
    picture_url: String,
    xl_picture_url: String,
});

const LocationSchema = new Schema ({
    type: String,
    coordinates: [GeoLocationSchema]
});

const AddressSchema = new Schema ({
    street: String,
    suburb: String,
    government_area: String,
    market: String,
    country: String,
    country_code: String,
    location: LocationSchema,
});

const HostSchema = new Schema ({
    host_id: String,
    host_url:String,
    host_name: String,
    host_location: String,
    host_about: String,
    host_response_time: String,
    host_thumbnail_url: String,
    host_picture_url: String,
    host_neighbourhood: String,
    host_response_rate: Number,
    host_is_superhost: Boolean,
    host_has_profile_pic: Boolean,
    host_identity_verified: Boolean,
    host_listings_count: Number,
    host_total_listings_count: Number,
    host_verification: [AmenitiesSchema]
});

const AvailabilitySchema = new Schema ({
    availability_30: Number,
    availability_60: Number,
    availability_90: Number,
    availability_365: Number,
});

const ReviewScoresSchema = new Schema ({
    review_scores_accuracy: Number,
    review_scores_cleanliness: Number,
    review_scores_checkin: Number,
    review_scores_communication: Number,
    review_scores_location: Number,
    review_scores_value: Number,
    review_scores_rating: Number,
});

const ReviewsSchema = new Schema ({
    _id: String,
    date: String,
    listing_id: String,
    reviewer_id: String,
    reviewer_name: String,
    comments: String,
});

const ListingSchema = new Schema ({
    _id: String,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: String,
    calendar_last_scraped: String,
    first_review: String,
    last_review: String,
    accomodates: Number,
    bedrooms: Number,
    beds: Number,
    Int_of_reviews: Number,
    bathrooms: Number,
    amenities: [AmenitiesSchema],
    price: Number,
    security_deposit: Number,
    cleaning_fee: Number,
    extra_people: Number,
    guests_included: Number,
    active: Boolean,
    birthdate: String,
    emails: String,
    username: String,
    images: ImagesSchema,
    host: HostSchema,
    address: AddressSchema,
    availability: AvailabilitySchema,
    review_scores: ReviewScoresSchema,
    reviews:  [ReviewsSchema]
});


const Listings = mongoose.model('listings', ListingSchema); 

module.exports = {
  Listings
};