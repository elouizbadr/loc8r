var express = require('express');
var router = express.Router();

/* Require Controllers */
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

/* Define "Locations" API Routes */
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreateOne);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

/* Define "Reviews" API Routes */
router.post('/locations:locationid/reviews', ctrlReviews.reviewsCreateOne);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

/* Export Routes */
module.exports = router;
