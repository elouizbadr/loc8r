var mongoose = require('mongoose');

/* Define the openingTime Schema */
var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    openingH: String,
    closingH: String,
    closed: {type: Boolean, required: true}
});

/* Define the Review Schema */
var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    text: String,
    timestamp: {type: Date, "default": Date.now},
});

/* Define a location schema */
var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    map: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

/* Compile this Model */
/* mongoose.model(<model_name>, <model_schema>, [<model_collection_name>]) */
mongoose.model('Location', locationSchema, 'locations');
