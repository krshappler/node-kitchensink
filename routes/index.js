var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habitat', function(req, res, next) {
  res.render('habitat')
})

router.get('/cookies', function(req, res, next) {
  res.render('cookies')
})

router.get('/logging', function(req, res, next) {
  res.render('logging')
})

router.get('/web-sockets', function(req, res, next) {
  res.render('web-sockets')
})


module.exports = router;
