(function () {
    "use strict";

    angular.module('eat-to-bite',[
    "ngRoute",
    "ngCookies",
    "posts",
    "profile",
    "menus"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "homeCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
    });

})();