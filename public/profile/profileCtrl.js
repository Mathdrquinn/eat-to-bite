(function () {
    "use strict";

    angular
        .module('profile')
        .controller('profileCtrl', ['$scope', '$filter', 'profileSvc', '$location', '$cookieStore', function ($scope, $filter, profileSvc, $location, $cookieStore) {

            $scope.work = "Angular is here!";

            $cookieStore.put("name", "my name");
            $scope.word = $cookieStore.get("name");
            console.log($scope.word);

            var first = true
            var myCoordList = [];
            var myGMap = null;
            var myTrail = null;
            var myMap = angular.element('mapPort');
            var myStartLoc = angular.element('myStartLoc');
            var myCurrentLoc = angular.element('myCurrentLoc');
            var myLocCount = angular.element('myLocCount');
            var myAccuracy = angular.element('myAccuracy');


            //Success Function
            var successCallback = function(position) {
                console.log('begin success');
                console.log('set coords');
                var myCoords = new google.maps.LatLng (
                    position.coords.latitude,
                    position.coords.longitude
                );
                console.log('creating inside map');
                window.map = {
                    center: {
                        latitude: myCoords.B,
                        longitude: myCoords.k
                    },
                    zoom: 15
                };

                console.log("myCoords: " + myCoords.k);
                console.log($scope.map);



                console.log('create map');
            }
            //Error Callback
            var errorCallback = function (positionError) {
                var msg = {
                    1: 'Permission to use geolocation has been denied',
                    2: 'Your position could not be determined',
                    3: 'The operation has timed out'
                };
                myMap.text(msg[positionError.code]);
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            }
            else {
                this.myMap.text('HTML5 geolocation is not supported on your browser');
            }

            $scope.makeProfile = function (newProfile) {
                console.log("person created: " + newProfile);
                newProfile.name = newProfile.firstName + " " + newProfile.lastName;
                newProfile.date = new Date().getTime();
                newProfile.created = true;
                newProfile.map = map;
                console.log(newProfile.map);
                $cookieStore.put("profile", newProfile);
                console.log("cookie created: " + $cookieStore.get("profile"));
                $location.path('/profile')
            };

            $scope.printCookie = function () {
                console.log($cookieStore.get("profile"))
            };

            $scope.person = $cookieStore.get("profile");

        }]);
})();