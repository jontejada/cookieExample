var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	// res.cookie('views', parseInt(req.signedCookies.views || 0) + 1, {signed: true, httpOnly: true});
	// res.render('index', {title: 'Express', views: (req.signedCookies.views || 0)});

	// Update views 
  req.session.views = (req.session.views || 0) + 1;
 
  // Write response 
  // res.end(req.session.views + ' views');
  res.render('index', {title: 'Views', views: (req.session.views || 0)});
});

module.exports = router;
