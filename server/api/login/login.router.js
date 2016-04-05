var router = require('express').Router();
var User = require('../users/user.model.js');


router.post('/', function(req, res, next) {
	var body = req.body;
	User.find(body)
	.then(function(user) {
		user = user[0];
		if (!user) res.sendStatus(401);
		else {
			console.log('user from the backend:', user);
			req.session.userId = user._id;
			res.status(200).send(user);
		}
	})
	.catch(next);
});

module.exports = router;