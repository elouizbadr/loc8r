// Requires
var mongoose = require('mongoose');
var locationModel = mongoose.model('Location');

// Reusable functions
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Some of useful Mongoose model query definition methods :
// + find - General search.
// + findById - Search by a given ID.
// + findOne - Search for the first item.
//
// To execute the above query method, use 'exec' method as follows :
// modelObject
//            .findById()
//            .exec( function(err, foundItem) {
//                console.log('done!');
//             });
//


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
  if (req.params && req.params.locationid) {
    locationModel
        .findById(req.params.locationid)
        .exec( function(err, location) {
            if(!location) {
                sendJsonResponse(res, 404, {message: "No Location found with this ID!"});
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, location);
        });
  } else {
    sendJsonResponse(res, 404, {message: "No Location ID was given in the request!"});
  };
};

// Update a specific Location
module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};

// Delete a specific Location
module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {status: "success"});
};
