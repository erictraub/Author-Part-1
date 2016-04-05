app.factory('LoginFactory', function($http, $log, $state) {

	var currentUser = null;

	return {

		submitLogin: function(data) {
			$http.post('/api/login', data)
			.then(function(user) {
				console.log('user.data returned from login route:', user.data);
				currentUser = user.data;
				console.log('currentUser after logging in:', currentUser);
				$state.go('stories');
			})
			.catch($log.error);
		},

		setCurrentUser: function(newUser) {
			currentUser = newUser;
		}
	};
});