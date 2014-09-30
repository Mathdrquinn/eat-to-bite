(function () {
    "use strict";

    angular
        .module('menus')
        .factory('menusSvc', ['$http', '$rootScope', '$cookieStore', function ($http, $rootScope, $cookieStore) {


            var map = $cookieStore.get("profile").map;
            var person = $cookieStore.get('profile');

            function getRestaurants() {

                return $http.get("api/collections/restaurants");
            }

            function getRestaurant(restaurantId) {
                console.log("the service");
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

            // public service methods
            return {
                getRestaurants: getRestaurants,
                getRestaurant: getRestaurant,
                createRestaurant: createRestaurant,
                editRestaurant: editRestaurant,
                deleteRestaurant: deleteRestaurant,
                person: person,
                lat: map.center.latitude,
                lng: map.center.longitude,
                zoom: map.zoom,
                map: map
            };

        }]);
})();