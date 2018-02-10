//One way data binding
var app=angular.module("Sample",[]);
app.controller("emp",["$scope",function($scope){
    $scope.a = 10;
    $scope.b = 20;
    $scope.sum = 0;

    $scope.doDoubleAndSum = () => {
        $scope.a = $scope.a*2;
        $scope.b = $scope.b*2;
        $scope.sum = parseInt($scope.a)
                        +parseInt($scope.b);
    }
}]);
app.controller("twoWay",["$scope",function($scope){
    $scope.a = 10;
    $scope.b = 20;
    $scope.sum = 0;

    $scope.doSum = () => {
        $scope.sum = parseInt($scope.a)
                        +parseInt($scope.b);
    }
}]);