// Requires
var mongoose = require('mongoose');
var locationModel = mongoose.model('Location');

// Reusable functions
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Return all Locations
module.exports.locationsList = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};

// Create a new Location
module.exports.locationsCreateOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};
// Return a specific Location
module.exports.locationsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};

// Update a specific Location
module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};

// Delete a specific Location
module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};
