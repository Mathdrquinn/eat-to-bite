(function () {
    "use strict";

    angular
        .module('menus', [
            "ngRoute",
            "ngSanitize"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/restaurantMenu/:restaurantId', {
                    templateUrl: 'menus/views/single.html',
                    controller: 'menusCtrl'
                })
                .when('/menus', {
                    templateUrl: 'menus/views/list.html',
                    controller: 'menusCtrl'
                })
                .when('/search', {
                    templateUrl: 'menus/views/search.html',
                    controller: 'menusCtrl'
                });
        });

})();