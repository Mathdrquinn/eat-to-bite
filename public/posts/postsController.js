(function () {
    "use strict";

    angular
        .module('posts')
        .controller('postsController', ['$scope', '$filter', 'postsService', '$location', '$routeParams', function ($scope, $filter, postsService, $location, $routeParams) {
            postsService.getPosts().success(function (posts) {
                var orderBy = $filter('orderBy');
                $scope.posts = posts;
                $scope.posts = orderBy($scope.posts, '-date', false);
            });

            postsService.getPost($routeParams.postId).success(function (post) {
                $scope.post = post;
                console.log("here with: " + $scope.post);
            });

            $scope.createPost = function (newPost) {
                console.log("post created: " + newPost);
                newPost.date = new Date().getTime();
                postsService.createPost(newPost);
                $location.path('/posts');
            };

            $scope.editPost = function (post) {
                postsService.editPost(post);
                $location.path('/posts');
            };

            $scope.deletePost = function (id) {
                postsService.deletePost(id);
                $location.path('/posts');
            }


        }]);
})();