/* "homeList" function */
module.exports.homeList = function(req, res) {
    res.render('locationsList', {
        title: 'Loc8r - find a place to work with wifi!',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi!'
        },
        locations: [
	    {
		name: 'Starcups',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 3,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '100m',
	    },
	    {
		name: 'McDonald\'s',
		address: '125 Mohamed V, Casablanca, Morocco',
		rating: 4,
		facilities: ['Ice Cream', 'Food', 'Premium wifi'],
		distance: '250m',
	    },
	    {
		name: 'Starbucks',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 3,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '300m',
	    }
	]
    });
};

/* "locationInfo" function */
module.exports.locationInfo = function(req, res) {
	res.render('locationInfo', {title: 'Location Info'});
};

/* "addReview" function */
module.exports.addReview = function(req, res) {
	res.render('locationReviewForm', {title: 'Add Review'});
};
