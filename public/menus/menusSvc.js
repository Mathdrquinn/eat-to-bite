(function () {
    "use strict";

    angular
        .module('menus')
        .factory('menusSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getPosts: getPosts,
                getPost: getPost,
                createPost: createPost,
                editPost: editPost,
                deletePost: deletePost
            };

            function getPosts() {

                return $http.get("api/collections/featuredDishes");
            }

            function getPost(postId) {
                return $http.get("api/collections/featuredDishes/" + postId);
            }

            function createPost(newPost) {
                $http.post("api/collections/featuredDishes", newPost).then(function (res) {
                    $rootScope.$broadcast("post:added");
                });
            }

            function editPost(post) {
                $http.put("api/collections/featuredDishes/" + post._id, post).then(function (res) {
                    $rootScope.$broadcast("post:updated");
                });

            }

            function deletePost(postId) {
                $http.delete("api/collections/featuredDishes/" + postId).then(function (res) {
                    $rootScope.$broadcast("post:deleted");
                });
            }



        }]);
})();