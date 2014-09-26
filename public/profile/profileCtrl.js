(function () {
    "use strict";

    angular
        .module('profile')
        .controller('profileCtrl', ['$scope', '$filter', 'profileSvc', '$location', '$cookieStore', function ($scope, $filter, profileSvc, $location, $cookieStore) {

            $scope.work = "Angular is here!";

            $cookieStore.put("name", "my name");
            $scope.word = $cookieStore.get("name");
            console.log($scope.word);

            $scope.makeProfile = function (newProfile) {
                console.log("person created: " + newProfile);
                newProfile.name = newProfile.firstName + " " + newProfile.lastName;
                newProfile.date = new Date().getTime();
                newProfile.created = true;
                $cookieStore.put("profile", newProfile);
                console.log("cookie created: " + $cookieStore.get("profile"));
                $location.path('/profile')
            };

            $scope.printCookie = function () {
                console.log($cookieStore.get("profile"))
            };

            $scope.person = $cookieStore.get("profile");

        }]);
})();