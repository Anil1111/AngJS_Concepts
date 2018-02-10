//One way data binding
var app=angular.module("Sample",[]);

app.controller("twoWay",["$scope","$http","$log",function($scope,$http,$log){
    $scope.a = 10;
    $scope.b = 20;
    $scope.sum = 0;

    $scope.doSum = () => {
        $http({
           // Options to connect to server,URL,Method(GET/POST),Headers
           url: 'http://localhost:2018/Sum?a=' + $scope.a + '&b=' +$scope.b,
           method:'GET'
            })
            .then(
            function(resp){
                $scope.sum=resp.data;
                $log.log(resp.data);
            //Success
            },
            function(resp){
            //failure
            $log.error("Error Occured")
            }
            );
            
       // $scope.sum = parseInt($scope.a)
               //         +parseInt($scope.b);
    }
}]);