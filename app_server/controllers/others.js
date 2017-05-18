/* GET home page */
module.exports.about = function (req, res) {
  res.render('genericText', {title: 'About'});
};
