(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', '$cookieStore', function ($scope, $filter, menusSvc, $location, $routeParams, $cookieStore) {

            var lat = menusSvc.lat;
            var lng = menusSvc.lng;
            var zoom = menusSvc.zoom;
            var person = menusSvc.person
            $scope.person = person;

            $scope.work = "Angular is here!";

            menusSvc.getRestaurants().success(function (restaurants) {
                $scope.restaurants = restaurants;

                //Defining checker here to ensure that Data is received before evaluation
                $scope.checker = new Beauty($scope.person, restaurants);
                $scope.checker.alert();
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
                this.findMatches = function(dishesAllergens, dishesDiets) {
                    this.allergic = this.getAllergens();
                    this.diet = this.getDiet()
                    this.allergic = this.matchAllergies(this.allergic, dishesAllergens);
                    this.diet = this.matchDiets(this.diet, dishesDiets);
                    console.log ("allergic")
                    console.log("diet");
                }
                this.getAllergens = function () {
                    var x = person.allergens;
                    var z = {}
                    for (var prop in x) {
                        if (x[prop]) {
                            z[prop] = x[prop]
                            console.log(prop + " is true")
                        }
                    }
                    console.log("z: " + z.nuts + " " + z[nuts] + " " + z);
                    return z;
                }
                this.getDiet = function () {
                    var y = person.diet;
                    var z = {};
                    for (var prop in y) {
                        if (y[prop]) {
                            z[prop] = y[prop]
                            console.log(prop + " is true")
                        }
                    }
                    console.log("z: " + z.carb);
                    return z;
                }
                this.matchAllergies = function (aPObj, aObj) {
                    for(var prop in aPObj) {
                        if (aObj[prop]) {alert("warning you are allergic to: " + prop + ", do not eat")}

                    }

                }
                this.matchDiets = function (dPObj, dObj) {
                    for(var prop in dPObj) {
                        if (dObj[prop]) {alert("warning this is against your: " + prop + "diet,  do not eat")}

                    }
                }
            };
            $scope.checker = new Beauty($scope.person, $scope.restaurants);

            console.log('creating center');
            $scope.map = {
                center: {
                    latitude: 32.8444444,
                    longitude: -79.9
                },
                zoom: 11
            };

            //$scope.map = menusSvc.map;


        }]);
})();