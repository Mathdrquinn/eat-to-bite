(function () {
    "use strict";

    angular
        .module('eat-to-bite')
        .controller('homeCtrl',['$scope', '$filter', 'postsService', function ($scope, $filter, postsService) {

            $scope.works = 'Angular is here';

            postsService.getPosts().success(function (posts) {
                var orderBy = $filter('orderBy');
                $scope.posts = posts;
                $scope.posts = orderBy($scope.posts, '-date', false);
                $scope.newestPost = $scope.posts[0];
                console.log($scope.newestPost.dishImage);
            });

        }]);

})();