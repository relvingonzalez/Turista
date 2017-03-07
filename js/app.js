
(function () {
    "use strict";

    angular.module('Turista',['leaflet-directive','ngRoute'])
        .config(config);

    function config($routeProvider){
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

    }
});