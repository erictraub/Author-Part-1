app.controller('SignUpCtrl', function($scope, SignUpFactory) {

	$scope.signUp = function() {
		SignUpFactory.signUp($scope.data);
	};

});