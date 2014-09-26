(function () {
    "use strict";

    angular
        .module('profile')
        .factory('profileSvc', ['$http', '$rootScope', function ($http, $cookies, $cookieStore, $location, $rootScope) {

            var addProfile = function(profile) {
                console.log("in service");
                $cookieStore.put('profile', profile);
            };


            return {
                addProfile: addProfile
            }
        }]);
})();