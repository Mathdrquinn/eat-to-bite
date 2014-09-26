(function () {
    "use strict";

    angular.module('eat-to-bite',[
    "ngRoute",
    "ngCookies",
    "posts"
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