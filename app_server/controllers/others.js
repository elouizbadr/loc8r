/* GET home page */
module.exports.about = function (req, res) {
    res.render('genericText', {
	title: 'About',
	content: 'Loc8r was created to help people find places to sit down and get a bit of work done. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.'
    });
};
