const express = require('express');
const router = express.Router();

/* GET students page. */
router.get('/', function (req, res, next) {
  res.render('students', {
    title: 'Students Page',
    message: 'Welcome to the Students Page!',
    img: '/images/team.jpg',
  });
});

router.get('/oleh', function (req, res) {
  res.render('students', {
    title: 'Oleh Page',
    message: 'Welcome to the Oleh Buriachok Page!',
    img: '/images/oleh.webp',
  });
});

router.get('/vladyslav', function (req, res) {
  res.render('students', {
    title: 'Vladyslav Page',
    message: 'Welcome to the Vladyslav Zhukov Page!',
    img: '/images/vladyslav.jpg',
  });
});

router.get('/maxim', function (req, res) {
  res.render('students', {
    title: 'Maxim Page',
    message: 'Welcome to the Maxim Litynskyi Page!',
    img: '/images/maxim.webp',
  });
});

router.get('/sofia', function (req, res) {
  res.render('students', {
    title: 'Sofia Page',
    message: 'Welcome to the Sofia Tanchuk Page!',
    img: '/images/sofia.webp',
  });
});

module.exports = router;
