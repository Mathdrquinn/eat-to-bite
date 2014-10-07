(function () {
    "use strict";

    angular.module('eat-to-bite',[
    "ngRoute",
    "ngCookies",
    "google-maps",
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

$(document).ready(function () {
    $('.navButton').on('click', 'a', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    })
})