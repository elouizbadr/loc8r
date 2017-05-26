// Requires
var mongoose = require('mongoose');
var locationModel = mongoose.model('Location');

// Reusable functions
var returnJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

// Read a specific Review
module.exports.reviewsReadOne = function (req, res) {
    if (req.params && req.params.locationid && req.params.reviewid) {
        locationModel // call the Mongoose model
            .findById(req.params.locationid) // look for a Location with given ID in Mongo
            .select('name reviews') // Retrieve only "name" and "reviews" attributes
            .exec( // Then execute
                function(err, location) { 
                    var response, review; // Declaring a custom Response and Review object
                    if(!location) { // If no Location was found with that given ID
                        returnJsonResponse(res, 404, // Returning a 404 HTTP error
                            {message: "locationid not found!"}
                        );
                        return // Stop execution chain here.
                    } else if(err) { // If an unknown error occured, return it
                        returnJsonResponse(res, 404, err);
                        return
                    } // If the Location wit given ID was found
                    if(location.reviews && location.reviews.length > 0) {
                        // If the Location object has reviews in it, look for a Review with given ID
                        review = location.reviews.id(req.params.reviewid);
                        // If no Review with given ID was found, return 404 HTTP error
                        console.log(req.params.reviewid);
                        if(!review) {
                            returnJsonResponse(res, 404, {message: "reviewid not found!"});
                        }
                        // If it is found
                        else { // Create a custome Response object
                            response = {
                                location : {
                                    name: location.name,
                                    id: req.params.locationid
                                },
                                review: review
                            }
                            // Return that object
                            returnJsonResponse(res, 200, response);
                        }
                    } else { // If this Location object has no reviews
                        returnJsonResponse(res, 404, {
                            message: "No reviews found in this Location!"
                        });
                    }
                }
            );
    } else {
        returnJsonResponse(res, 404, {
            message: "locationid and reviewid are both required!"
        });
    }
};

// Create a new Review
module.exports.reviewsCreateOne = function (req, res) {
    returnJsonResponse(res, 200, {status: "success"});
};

// Update a specific Review
module.exports.reviewsUpdateOne = function (req, res) {
    returnJsonResponse(res, 200, {status: "success"});
};

// Delete a specific Review
module.exports.reviewsDeleteOne = function (req, res) {
    returnJsonResponse(res, 200, {status: "success"});
};
