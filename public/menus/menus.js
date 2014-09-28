(function () {
    "use strict";

    angular
        .module('menus', [
            "ngRoute",
            "ngSanitize"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/menus', {
                    templateUrl: 'menus/views/list.html',
                    controller: 'menusCtrl'
                });
        });

})();