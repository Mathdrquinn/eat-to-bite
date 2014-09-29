(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', function ($scope, $filter, menusSvc, $location, $routeParams) {

            $scope.work = "Angular is here!";

            menusSvc.getRestaurants().success(function (restaurants) {
                $scope.restaurants = restaurants;
            });

            menusSvc.getRestaurant($routeParams.restaurantId).success(function (restaurant) {
                console.log("the place");
                $scope.singleRestaurant = restaurant;
                console.log("here with: " + $scope.singleRestaurant);
            });

        }]);
})();