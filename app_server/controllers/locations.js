/* "homeList" function */
module.exports.homeList = function(req, res) {
	res.render('index', {title: 'Home'});
};

/* "locationInfo" function */
module.exports.locationInfo = function(req, res) {
	res.render('index', {title: 'Location Info'});
};

/* "addReview" function */
module.exports.addReview = function(req, res) {
	res.render('index', {title: 'Add Review'});
};
