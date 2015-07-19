app.factory('places',['$http',function($http){
    var lat = 0;
    var long = 0;
   return  $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&' +
       'list=geosearch&gsradius=5000&gscoord=' + lat + '%7C' + long + '&gslimit=30&format=json&callback=JSON_CALLBACK')
           .success(function (data) {
               return data;
           })
           .error(function (err) {
               return err;
           })
}]);