(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', function ($scope, $filter, menusSvc, $location, $routeParams) {

            $scope.work = "Angular is here!";

            menusSvc.getRestaurants().success(function (restaurants) {
                $scope.restaurants = restaurants;
            });

        }]);
})();