var myModule = angular.module("myApp", ["ngRoute"]);

var ListController = function ($scope) {
    $scope.mes = "List page";
}

var DetailController = function ($scope) {
    $scope.mes = "Detail page";
}

//myModule.controller("ListController", function($scope){
//    
//});
//
//myModule.controller("DetailController", function($scope){
//    $scope.mes = "Detail page";
//});

//ルート設定
var emailRouteConfig = function($routeProvider) {
    $routeProvider.
    
        when("/", {controller: ListController,
                   templateUrl: "list.html"}).
        when("/aaa", {controller: DetailController,
                           templateUrl: "detail.html"}).
        
        otherwise({redirectTo: "/"});
}

myModule.config(emailRouteConfig);

myModule.controller("emailController",['$http', '$scope',  function($http, $scope){
    var test_messages = "this is test";
    var items = [
        {name: "yamada", score: 60},
        {name: "takahashi", score: 12},
        {name: "tanaka", score: 90}
    ];
    
    $scope.items = items;
    
    $scope.testhttp = function () {
        console.log($http.get('test.html'));
    }
}]);

