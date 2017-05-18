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
    returnJsonResponse(res, 200, {status: "success"});
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
