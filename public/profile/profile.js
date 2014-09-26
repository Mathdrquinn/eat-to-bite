(function () {
    "use strict";

    angular
        .module('profile', [
            "ngRoute",
            "ngCookies"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/createProfile', {
                    templateUrl: 'profile/views/createProfile.html',
                    controller: 'profileCtrl'
                })
                .when('/profile', {
                    templateUrl: 'profile/views/profile.html',
                    controller: 'profileCtrl'
                });
        });

})();