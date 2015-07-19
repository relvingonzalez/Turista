/**
 * Created by Relvin Gonzalez on 7/3/2015.
 */
app.factory('myLocation', ['$q',function getLocation($q) {
    var coords = $q.defer();
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(getMyPosition,showError);
    }

    function getMyPosition(position){
            var myLocation = {};
            myLocation.lat = position.coords.latitude;
            myLocation.lng = position.coords.longitude;
            coords.resolve(myLocation);

    }
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                coords.reject( "User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                coords.reject( "Location information is unavailable." );
                break;
            case error.TIMEOUT:
                coords.reject("The request to get user location timed out.");
                break;
        }
    }


    return coords.promise;
}]);
