(function () {
    "use strict";

    angular
        .module('profile')
        .controller('profileCtrl', ['$scope', '$filter', 'profileSvc', '$location', '$routeParams', function ($scope, $filter, profileSvc, $location, $routeParams) {

            $scope.work = "Angular is here!";

            profileSvc.getMenus().success(function (menus) {
                $scope.menus = menus;
            });

            profileSvc.getMenu($routeParams.postId).success(function (menu) {
                $scope.menu = menu;
                console.log("here with: " + $scope.menu);
            });

            $scope.createMenu = function (newMenu) {
                console.log("menu created: " + newMenu);
                newMenu.date = new Date().getTime();
                profileSvc.createMenu(newMenu);
                $location.path('/search')
            };

            $scope.editMenu = function (menu) {
                menuService.editMenu(menu);
                $location.path('/editMenus');
            };

            $scope.deleteMenu = function (id) {
                menuService.deleteMenu(id);
                $location.path('/search');
            };

        }]);
})();