(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', '$cookieStore', function ($scope, $filter, menusSvc, $location, $routeParams, $cookieStore) {

            $scope.work = "Angular is here!";

            menusSvc.getRestaurants().success(function (restaurants) {
                $scope.restaurants = restaurants;

                //Defining checker here to ensure that Data is received before evaluation
                $scope.checker = new Beauty($scope.person, restaurants);
                $scope.checker.alert();
                $scope.checker.createMap();
            });

            menusSvc.getRestaurant($routeParams.restaurantId).success(function (restaurant) {
                console.log("the place");
                $scope.singleRestaurant = restaurant;
                console.log("here with: " + $scope.singleRestaurant);
            });

            //functions and variables for defining profile and measuring its variables
            //compared to those of the restaurants
            //Beauty is called on line 14
            //Each profile has: firstName, lastName, name, email, DOB, date, avatar, created(boolean), likes, dislikes, allergens{}, diet{}

            $scope.person = $cookieStore.get("profile");

            function Beauty(person, places) {
                this.talk = console.log('checker is loading');
                this.sayName = function (){
                    console.log(person.name);
                }
                this.sayFirstRestaurant = function() {
                    console.log(places);
                }
                this.alert = function () {
                    if(!person.created) {alert("You have not created a profile, please do so to personalize your searches");}
                }
                this.createMap = function() {
                    this.getCoords()
                }
                this.getCoords = function () {
                    this.defineGeo();
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
                    }
                    else {
                        this.myMap.text('HTML5 geolocation is not supported on your browser');
                    }

                }
                this.defineGeo = function () {
                    this.first = true;
                    this.myCoordList = [];
                    this.myGMap = null;
                    this.myTrail = null;
                    this.myMap = angular.element('mapPort');
                    this.myStartLoc = angular.element('myStartLoc');
                    this.myCurrentLoc = angular.element('myCurrentLoc');
                    this.myLocCount = angular.element('myLocCount');
                    this.myAccuracy = angular.element('myAccuracy');
                }
                //Success Function
                this.successCallback = function(position) {
                    console.log('begin success');

//                    this.myMap.style.width = '50%';
//                    this.myMap.style.height = '480px';

                    console.log('set coords');
                    this.myCoords = new google.maps.LatLng (
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    console.log(this.myCoords);

                    console.log('create map');
                    this.map = new google.maps.Map (
                        this.myMap,
                        { zoom: 15,
                            center: this.myCoords,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        });
                    console.log(this.map);

                    console.log('put marker on map');
                    this.marker = new google.maps.Marker({
                        position: this.myCoords,
                        map: this.map
                    });
                    console.log(marker);

                    console.log('create radius');
                    this.accuracyRadius = new google.maps.Circle ({
                        map: map,
                        radius: position.coords.accuracy,
                        fillColor: '#00AA00'
                    });
                    console.log(this.accuracyRadius);

                    console.log('bind radius');
                    this.accuracyRadius.bindTo('center', this.marker, 'position');

                }
                //Error Callback
                this.errorCallback = function (positionError) {
                    var msg = {
                        1: 'Permission to use geolocation has been denied',
                        2: 'Your position could not be determined',
                        3: 'The operation has timed out'
                    };
                    this.myMap.text(msg[positionError.code]);
                }
            };

            $scope.checker = new Beauty($scope.person, $scope.restaurants);

        }]);
})();