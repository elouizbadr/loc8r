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

// Return NearBy Locations
module.exports.locationsListByDistance = function (req, res) {
    // point declaration to geoNear()
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    var point = {
        type: "Point",
        coordinates: [lng, lat]
    };
    // Callback method to geoNear()
    var theEarth = (function () {
        var earthRadius = 6371; //Earth Radius is Kms
        
        // Function to convert Distance to Radius
        var getDistanceFromRads = function (rads) {
            return parseFloat(rads * earthRadius);
        }
        // Function to convert Radius to Distance
        var getRadsFromDistance = function (distance) {
            return parseFloat(distance / earthRadius);
        }
        // Expose the two previous functions
        return {
            getDistanceFromRads: getDistanceFromRads,
            getRadsFromDistance: getRadsFromDistance
        }
    })();
    // options to geoNear()
    var geoOptions = {
        spherical: true, // Set the EARTH as Spherical, otherwise use "flat: true"
        maxDistance: theEarth.getRadsFromDistance(20), // Maximum Distance of 20 Kms
        num: 10 // Limit the number of results returned on 10
    };
    // If one or both URL params were not found
    if(!lng || !lat) {
        sendJsonResponse(res, 404, {
            message: "lng and lat query parameters are required!"
        });
    }
    // Else, geoNear() definition
    locationModel.geoNear(point, geoOptions, function (err, results, stats){
        var nearLocations = []; // Empty Locations list
        if(err) {
            sendJsonResponse(res, 404, err);
        } else {
            results.forEach(function (doc) { // For each found Location
                nearLocations.push({ // Add that location to the List
                    distance: theEarth.getDistanceFromRads(doc.dis),
                    name: doc.obj.name,
                    address: doc.obj.address,
                    rating: doc.obj.rating,
                    facilities: doc.obj.facilities,
                    _id: doc.obj._id
                });
            });
            // Finally, send back found Locations
            sendJsonResponse(res, 200, nearLocations);
        }
    });
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
