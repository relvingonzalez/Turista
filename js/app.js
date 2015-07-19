var app = angular.module('Turista',['leaflet-directive','ngRoute']);
app.config(function($routeProvider){
	$routeProvider
  	.when('/',{
  		controller: 'MainController',
    	templateUrl: 'views/main.html',
			resolve: {
				position: function (myLocation) {
					return myLocation;
				}
			}
  	})
  	.when('/about',{
  		controller: 'AboutController',
    	templateUrl: 'views/about.html'
  	})
  	.otherwise({
  		redirectTo: '/'
  });

});