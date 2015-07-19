//Creator Relvin Gonzalez
//This controller receives the current user location and gets near places by JSON
//position promise made by myLocation service
app.controller('MainController',['$scope','position','$http',function($scope,position,$http) {

    $scope.lat = position.lat;
    $scope.lng = position.lng;

    $scope.mapCenter = {
        lat: $scope.lat,
        lng: $scope.lng,
        zoom: 30
    };
    var getNearPlaces = $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&' +
    'list=geosearch&gsradius=5000&gscoord=' + $scope.lat + '%7C' + $scope.lng + '&gslimit=30&format=json&callback=JSON_CALLBACK')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        })


   getNearPlaces.success(function(data){
   	$scope.geodata = data;
    var pointOfOrigin ={
        lat: position.lat,
        lng: position.lng,
        message:"You are here!",
        icon: {
            type: 'awesomeMarker',
            icon: 'user',
            markerColor: "red",
            iconColor: 'white'
        }
    };
    $scope.mapMarkers = geodataToMarkers($scope.geodata);
    $scope.mapMarkers.push(pointOfOrigin);
       var sthaaap = false;
   });



}])