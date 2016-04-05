var router = require('express').Router();




router.post('/', function(req, res, next) {
	req.session.userId = null;
	res.sendStatus(204);
});













module.exports = router;