(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', '$cookieStore', function ($scope, $filter, menusSvc, $location, $routeParams, $cookieStore) {

            var lat = menusSvc.lat;
            var lng = menusSvc.lng;
            var zoom = menusSvc.zoom;
            var person = menusSvc.person;
            $scope.person = person;

            $scope.work = "Angular is here!";

            menusSvc.getRestaurants().success(function (restaurants) {
                console.log(restaurants['0']);
//                var poop = lookAtEach(restaurants);
//                console.log(poop);
//                $scope.restaurants = restaurants;
//                console.log(restaurants);
                $scope.restaurants = lookAtEach(restaurants);

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

            $scope.safe = function (x,y) {
                if(x && y) {return true;}
                else{return false;}
            }

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
//                    console.log("z: " + z.nuts + " " + z[nuts] + " " + z);
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
//                    console.log("z: " + z.carb);
                    return z;
                }
                this.matchAllergies = function (aPObj, aDObj) {
                    for(var prop in aPObj) {
                        if (aDObj[prop]) {alert("warning you are allergic to: " + prop + ", do not eat")}
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
            //var lookAtEach = function ($scope.restaurants.restaurant.name);
            var lookAtEach = function(obj) {
                for(var prop in obj) {
                    var newRestaurant = lookAtRest(obj[prop])
                    obj[prop] = newRestaurant;
                }
                return obj;
            };
            var lookAtRest = function (rest) {
                rest.spoiledTotal = 0;
                rest.total = 0;
                for (var j = 0; j < rest.menus.length; j++) {
                    var newMenu = lookAtMenu(rest.menus[j])
                    rest.menus[j] = newMenu;
                    console.log("here is the restaurant");
                    console.log(rest);
                    rest.spoiledTotal += rest.menus[j].spoiledTotal;
                    rest.total += rest.menus[j].total;
                    rest.goodTotal = rest.total - rest.spoiledTotal;

                }
                return rest;
            };
            var lookAtMenu = function (menu) {
                menu.spoiledTotal = 0;
                menu.total = 0;
                for (var k = 0; k < menu.sections.length; k++) {
                    var newSection = lookAtSection(menu.sections[k])
                    menu.sections[k] = newSection;
                    menu.spoiledTotal += menu.sections[k].spoiledTotal;
                    menu.total += menu.sections[k].total;
                }
                menu.goodTotal = menu.total - menu.spoiledTotal;
                return menu;
            };
            var lookAtSection = function (sect) {
                sect.spoiledTotal = 0;
                sect.total = 0;
                for (var m = 0; m < sect.dishes.length; m++) {
                    var allergenResults = findMatches(sect.dishes[m].allergens, sect.dishes[m].diet);
                    var dietResults = findMatches(sect.dishes[m].allergens, sect.dishes[m].diet);
                    console.log('For ' + sect.dishes[m].name);
                    console.log(allergenResults);
                    console.log(dietResults);
                    sect.dishes[m].matchedAllergens = allergenResults.allergens;
                    sect.dishes[m].matchedAllergensCount = allergenResults.allergens.length;
                    sect.dishes[m].matchedDiet = dietResults.diet;
                    sect.dishes[m].matchedDietCount = dietResults.diet.length;
                    var objSize = function(obj) {
                        var size = 0, key;
                        for (key in obj) {
                            if (obj[key]) size++;
                        }
                        return size;
                    };
                    if (sect.dishes[m].matchedAllergensCount) {
                        sect.spoiledTotal++;
                        sect.dishes[m].class = 'bg-red-light';
                    }
                    else if (!sect.dishes[m].matchedAllergensCount && sect.dishes[m].matchedDietCount === objSize($scope.person.diet)) {
                        sect.dishes[m].class = 'bg-green-light'
                    }
                    else{sect.dishes[m].class = 'bg-white'}
                    sect.total++;
                }
                console.log("here is the section");
                console.log(sect);
                return sect;
            }
            var findMatches = function(dishesAllergens, dishesDiets) {
                var allergic = getAllergens();
                var diet = getDiet()
                var allergic = matchAllergies(allergic, dishesAllergens);
                var diet = matchDiets(diet, dishesDiets);
                return {
                    allergens: allergic.allergenMatches,
                    diet: diet.dietMatches
                };
            };
            var getAllergens = function () {
                var x = $scope.person.allergens;
                var z = {}
                for (var prop in x) {
                    if (x[prop]) {
                        z[prop] = x[prop]
                    }
                }
//                    console.log("z: " + z.nuts + " " + z[nuts] + " " + z);
                return z;
            };
            var getDiet = function () {
                var y = $scope.person.diet;
                var z = {};
                for (var prop in y) {
                    if (y[prop]) {
                        z[prop] = y[prop]
                    }
                }
//                    console.log("z: " + z.carb);
                return z;
            };
            var matchAllergies = function (aPObj, aDObj) {
                var allergenMatches = [];
                for(var prop in aPObj) {
                    if (aDObj[prop]) {
                        allergenMatches.push(prop);
                    }
                }
                return {
                    allergenMatches: allergenMatches,
                };

            };
            var matchDiets = function (dPObj, dObj) {
                var dietMatches = []
                for(var prop in dPObj) {
                    if (dObj[prop]) {
                    dietMatches.push(prop);
                    }

                }
                return {
                    dietMatches: dietMatches,
                };
            };

        }]);
})();