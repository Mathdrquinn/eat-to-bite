(function () {
    "use strict";

    angular
        .module('menus')
        .controller('menusCtrl', ['$scope', '$filter', 'menusSvc', '$location', '$routeParams', function ($scope, $filter, menusSvc, $location, $routeParams) {

            function Restaurant() {
                this.newRestaurant = {
                    name: undefined,
                    style: undefined,
                    description: undefined,
                    menus: {
                        breakfast: {
                            used: false,
                            mealType: "breakfast",
                            description: undefined,
                            sections: []
                        },
                        brunch: {
                            used: false,
                            mealType: "brunch",
                            description: undefined,
                            sections: []
                        },
                        lunch: {
                            used: false,
                            mealType: "lunch",
                            description: undefined,
                            sections: []
                        },
                        dinner: {
                            used: false,
                            mealType: "dinner",
                            description: undefined,
                            sections: []
                        },
                        dessert: {
                            used: false,
                            mealType: "dessert",
                            description: undefined,
                            sections: []
                        }
                    }
                };
                this.addRestaurantInfo = function (newRest) {
                    this.newRestaurant.name = newRest.name;
                    this.newRestaurant.style = newRest.style;
                    this.newRestaurant.description = newRest.description;
                    console.log("step 1 complete: " + this.newRestaurant);
                };
                this.addMenu = function (menu) {
                    console.log(menu.type);
                    var menus = this.newRestaurant.menus;
                    var type = menu.type;
                    var both = menus + "." + type;
                    both.used = true;
                    both.description = menu.description;
                    console.log("step 2 complete: " + this.newRestaurant.menus.breakfast.description);
                };
                this.addMenuSection = function (type, section) {
                    var totalSection = {
                        name: section,
                        dishes: []
                    };
                    var menus = this.newRestaurant.menus;
                    var mType = type;
                    var all = menus + "." + mType + ".sections";
                    all.push(totalSection);
                    //this.newRestaurant.menus.type.sections.push(totalSection);
                    console.log("step 3 complete: " + this.newRestaurant);
                };
                this.addSectionDish = function (type, section, dish) {
                    var totalDish = {
                        name: dish.name,
                        description: dish.description,
                        allergens: dish.allergens,
                        qualities: dish.qualities
                    };
                    var j = this.getIndex(type.sections, section)
                    var menus = this.newRestaurant.menus;
                    var mType = type;
                    var all = menus + "." + mType + ".sections";
                    all[j].dishes.push(totalDish)
                    //this.Restaurant.menus.type.sections[j].dishes.push(totalDish);
                    console.log("step 4 complete: " + this.newRestaurant.name);
                    console.log(this.newRestaurant.menus.breakfast.used);
                    console.log(this.newRestaurant.menus.breakfast.sections[0].name);
                    console.log(this.newRestaurant.menus.breakfast.sections[0].dishes[0].name);
                };
                this.reset = function () {
                    creation.newRestaurant = {};
                };
                this.getIndex = function (arr, x) {
                    for(var i = 0; i < arr.length; i++) {
                        if (arr[i].name === x) {
                            return i;
                        }
                    }
                }
            };

            $scope.creation = new Restaurant ();
//            $scope.work = "Angular is here!";
//
//            profileSvc.getMenus().success(function (menus) {
//                $scope.menus = menus;
//            });
//
//            profileSvc.getMenu($routeParams.postId).success(function (menu) {
//                $scope.menu = menu;
//                console.log("here with: " + $scope.menu);
//            });
//
//            $scope.createMenu = function (newMenu) {
//                console.log("menu created: " + newMenu);
//                newMenu.date = new Date().getTime();
//                profileSvc.createMenu(newMenu);
//                $location.path('/search')
//            };
//
//            $scope.editMenu = function (menu) {
//                menuService.editMenu(menu);
//                $location.path('/editMenus');
//            };
//
//            $scope.deleteMenu = function (id) {
//                menuService.deleteMenu(id);
//                $location.path('/search');
//            };

        }]);
})();