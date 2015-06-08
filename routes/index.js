var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tabs', function(req, res, next) {
  res.render('tabs/tabs', {
    layout: '/tabs/layout'
  });
});

router.get('/animation', function(req, res, next) {
  res.render('animation/animation', {
    layout: '/animation/layout'
  });
});

router.get('/elements', function(req, res, next) {
  res.render('elements/elements', {
    layout: '/elements/layout'
  });
});

module.exports = router;
