(function () {
    "use strict";

    angular
        .module('profile')
        .controller('profileCtrl', ['$scope', '$filter', 'profileSvc', '$location', '$routeParams', function ($scope, $filter, profileSvc, $location, $cookies, $cookieStore) {

            $scope.work = "Angular is here!";

            $cookies.apple = "apple";
            $scope.word = $cookies.apple;
            console.log($cookies.apple);

            $scope.setProfile = function(profile) {
                profile.date = new Date().getTime();
                profile.name = profile.firstName + " " + profile.lastName;
                profileSvc.addProfile(profile);
                $scope.user = $cookieStore.get('profile');
                console.log("outta here");
                $location.path("/profile");
            };

            console.log($cookies.profile);
            console.log($scope.user);

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