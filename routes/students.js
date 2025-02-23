const express = require('express');
const router = express.Router();

/* GET students page. */
router.get('/', function (req, res, next) {
	res.render('students', {
		title: 'Students Page',
		message: 'Welcome to the Students Page!',
		img: 'images/team.jpg',
	});
});

module.exports = router;
