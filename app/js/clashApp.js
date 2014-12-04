// Javascript file for Clash building planner

var clashApp = angular.module('clashApp', ['ngRoute']);

// Service definiton
clashApp.service("ResourceService", function() {
	this.addBuilding = function(structures, newStruct) {
			structures.push(
				{ building: newStruct.building, 
				  level: newStruct.level, 
				  cost: newStruct.cost, 
				  time: newStruct.time, 
				  howMany: newStruct.howMany }
			);
		};
});

// Controller definition
var controllers = {};
controllers.goldController =  function($scope, $http) {
	$http.get('buildings/buildings.json')
		.success(function(data, status) {
			$scope.buildings = data;
		});

	$scope.title = "Structures for Gold";

	$scope.structures = [
		{ building:'Archer Tower', level:4, cost:1500000, time:4, howMany:4 },
		{ building:'Cannon', level:9, cost:800000, time:3, howMany:5 }
	];

	$scope.addBuilding = function() {
		$scope.structures.push(
			{ building: $scope.newStruct.building, 
			  level: $scope.newStruct.level, 
			  cost: $scope.newStruct.cost, 
			  time: $scope.newStruct.time, 
			  howMany: $scope.newStruct.howMany }
		);
	};
};
controllers.elixirController =  function($scope) {
	
	$scope.title = "Structures for Elixir";

	$scope.structures = [
		{ building:'Laboratory', level:6, cost:1000000, time:4, howMany:1 },
		{ building:'Dark Elixir Storage', level:2, cost:1200000, time:2, howMany:1 }
	];

	$scope.addBuilding = function() {
		$scope.structures.push(
			{ building: $scope.newStruct.building, 
			  level: $scope.newStruct.level, 
			  cost: $scope.newStruct.cost, 
			  time: $scope.newStruct.time, 
			  howMany: $scope.newStruct.howMany }
		);
	};
};
clashApp.controller(controllers);

// Route definition
clashApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/gold',{controller:'goldController', templateUrl:'partials/resource.html'})
		.when('/elixir', {controller:'elixirController', templateUrl:'partials/resource.html'}) 
		.otherwise({redirectTo: '/gold'});
}]);

function soon() {
		alert('Coming soon!');
}

