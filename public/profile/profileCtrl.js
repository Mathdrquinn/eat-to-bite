(function () {
    "use strict";

    angular
        .module('profile')
        .controller('profileCtrl', ['$scope', '$filter', 'profileSvc', '$location', '$routeParams', function ($scope, $filter, profileSvc, $location, $cookies) {

            $scope.work = "Angular is here!";

            $cookies.apple = "apple";
            $scope.word = $cookies.apple;
            console.log($cookies.apple);

            $scope.setProfile = function(profile) {
                profile.date = new Date().getTime();
                profile.name = profile.firstName + " " + profile.lastName;
                $cookies.profile = profile;
                $scope.profile = $cookies.profile;
            }

//            profileSvc.getProfile().success(function (profile) {
//                $scope.profile = profile;
//            });
//
//            $scope.createProfile = function (newProfile) {
//                console.log("menu created: " + newProfile);
//                newProfile.date = new Date().getTime();
//                profileSvc.createProfile(newProfile);
//                $location.path('/profile')
//            };
//
//            $scope.editProfile = function (profile) {
//                profileSvc.editProfile(menu);
//                $location.path('/profile');
//            };
//
//            $scope.deleteProfile = function (id) {
//                profileSvc.deleteProfile(id);
//                $location.path('/');
//            };

        }]);
})();