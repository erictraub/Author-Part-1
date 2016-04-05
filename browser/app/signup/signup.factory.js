app.factory('SignUpFactory', function($http, $log, $state, LoginFactory) {
	return {
		signUp: function(data) {
			$http.post('/api/users', data)
			.then(function(user) {
				LoginFactory.setCurrentUser(user.data);
				$state.go('stories');
			})
			.catch($log.error);
		}
	}
})