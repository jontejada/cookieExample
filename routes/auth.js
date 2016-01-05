var express = require('express');
var router = express.Router();

router.get('/logout', function(req,res){
	// res.clearCookie('views');
	req.session = null;
	res.redirect('/');
});

module.exports = router;

