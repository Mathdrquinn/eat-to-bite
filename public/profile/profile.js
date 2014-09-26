(function () {
    "use strict";

    angular
        .module('profile', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/profile', {
                    templateUrl: 'profile/views/profile.html',
                    controller: 'profileCtrl'
                });
        });

})();