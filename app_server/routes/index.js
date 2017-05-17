var express = require('express');
var router = express.Router();

/* Require Controllers */
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Define "Location" Routes */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Define "others" Routes */
router.get('/about', ctrlOthers.about);

module.exports = router;
