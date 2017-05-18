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
	],
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."
    });
};

/* "locationInfo" function */
module.exports.locationInfo = function(req, res) {
    res.render('locationInfo', {
        title: 'Starcups',
        pageHeader: {title: 'Starcups'},
	sidebar: {
	    context: "Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
	    callToAction: "If you've been and you like it - or if you dont't - please add a review to help other people just like you."
	},
	location: {
	    name: 'Starcups',
	    address: '125 High Street, Reading, RG6 1PS',
	    rating: 3,
	    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
	    map: {latitude: '33.992072', longitude: '-6.829187'},
	    openingHours: [
		{
		    days: 'Monday - Friday',
		    openingH: '7 AM',
		    closingH: '7 PM',
		    closed: false
		},{
		    days: 'Saturday',
		    openingH: '8 AM',
		    closingH: '5 PM',
		    closed: false
		},{
		    days: 'Sunday',
		    closed: true
		}],
	    reviews: [
		{
		    author: 'Badr ELOUIZ',
		    rating: 5,
		    timestamp: 'May 17th, 2017',
		    text: 'What a great place. I can\'t say enough good things about it.',
		},{
		    author: 'Nassima EL KAHILI',
		    rating: 3,
		    timestamp: 'May 16th, 2017',
		    text: 'It was okay. Coffee wasn\'t great, but the wifi was fast.',
		}
	    ]
	}
    });
};

/* "addReview" function */
module.exports.addReview = function(req, res) {
	res.render('locationReviewForm', {title: 'Add Review'});
};
