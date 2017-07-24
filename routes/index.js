var express = require('express');
var quotes = require('../lib/quotes');
var router = express.Router();
var colors=require('../lib/colors');


/* GET home page. */
router.get('/', function(req, res, next) {
  quote = quotes.getQuote();
  color = colors.getColor();
  res.render('index', { title: 'Random Quote Generator' , name:quote.name, text:quote.text, color:color.name});
});

router.get('/quote',function(req,res,next){
	quote = quotes.getQuote();
	res.send(quote);
})

router.get('/color',function(req,res,next){
	color = colors.getColor();
	res.send(color);
})

module.exports = router;
