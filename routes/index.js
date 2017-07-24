var express = require('express');
var quotes = require('../lib/quotes');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  quote = quotes.getQuote();
  res.render('index', { title: 'Random Quote Generator' , name:quote.name, text:quote.text});
});

module.exports = router;
