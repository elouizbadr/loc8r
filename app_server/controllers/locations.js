/* "homeList" function */
module.exports.homeList = function(req, res) {
	res.render('locationsList', {title: 'Home'});
};

/* "locationInfo" function */
module.exports.locationInfo = function(req, res) {
	res.render('locationInfo', {title: 'Location Info'});
};

/* "addReview" function */
module.exports.addReview = function(req, res) {
	res.render('locationReviewForm', {title: 'Add Review'});
};
