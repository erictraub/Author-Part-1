app.controller('LoginCtrl', function($scope, LoginFactory) {



	$scope.submitLogin = function() {
		LoginFactory.submitLogin($scope.data);
	};

});