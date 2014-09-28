(function () {
    "use strict";

    angular
        .module('menus')
        .factory('menusSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getRestaurants: getRestaurants,
                getRestaurant: getRestaurant,
                createRestaurant: createRestaurant,
                editRestaurant: editRestaurant,
                deleteRestaurant: deleteRestaurant
            };

            function getRestaurants() {

                return $http.get("api/collections/restaurants");
            }

            function getRestaurant(restaurantId) {
                return $http.get("api/collections/restaurants/" + restaurantId);
            }

            function createRestaurant(newRestaurant) {
                $http.post("api/collections/restaurants", newRestaurant).then(function (res) {
                    $rootScope.$broadcast("restaurant:added");
                });
            }

            function editRestaurant(restaurant) {
                $http.put("api/collections/restaurants/" + restaurant._id, restaurant).then(function (res) {
                    $rootScope.$broadcast("restaurant:updated");
                });

            }

            function deleteRestaurant(restaurantId) {
                $http.delete("api/collections/restaurants/" + restaurantId).then(function (res) {
                    $rootScope.$broadcast("restaurant:deleted");
                });
            }



        }]);
})();