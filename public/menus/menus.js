(function () {
    "use strict";

    angular
        .module('menus', [
            "ngRoute",
            "ngSanitize"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/createMenus', {
                    templateUrl: 'menus/views/create.html',
                    controller: 'menusCtrl'
                })
                .when('/menus', {
                    templateUrl: 'menus/views/list.html',
                    controller: 'menusCtrl'
                })
                .when('/editMenus', {
                    templateUrl: 'menus/views/edit.html',
                    controller: 'menusCtrl'
                });
        });

})();