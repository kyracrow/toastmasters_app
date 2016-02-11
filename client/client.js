/**
 * Created by kyracrowston on 2/3/16.
 */
//Angular Routing
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html',
            controller:'MainController'
        })
        .when('/filler', {
            templateUrl:'views/filler.html',
            controller:'MainController'
        })
        .when('/timer', {
            templateUrl: 'views/timer.html',
            controller: 'TimerController'
        })
        .when('/grammarian', {
            templateUrl:'views/grammarian.html',
            controller:'MainController'
        });
    $locationProvider.html5Mode(true);
}]);

app.controller('MainController', function(){

});


app.controller('TimerController', ['$scope', '$timeout', function($scope, $timeout){


        $scope.seconds = 0;
        $scope.minutes = 0;


    $scope.timeContent = '00:00:00';
    $scope.backGroundClass = 'green-bg';

    $scope.toYellow = 5;
    $scope.toRed = 10;

    function add() {
        $scope.seconds++;
        console.log($scope.seconds);
        if ($scope.seconds >= 60) {
            $scope.seconds = 0;
            $scope.minutes++;
            //if ($scope.minutes >= 60) {
            //    $scope.minutes = 0;
            //    hours++;
            //}
        }

        if($scope.minutes >= $scope.toYellow && $scope.minutes <= $scope.toRed){
            $scope.backGroundClass = 'yellow-bg';
        } else if($scope.minutes >= $scope.toRed) {
            console.log('IN RED');
            $scope.backGroundClass = 'red-bg';
        }

        $scope.timeContent = "00" + ":" + ($scope.minutes ? ($scope.minutes > 9 ? $scope.minutes : "0" + $scope.minutes) : "00") + ":" + ($scope.seconds > 9 ? $scope.seconds : "0" + $scope.seconds);

        console.log('Current time', $scope.timeContent);

        $scope.startTimer();
    }
    //function timer() {
    //    t = setTimeout(add, 1000);
    //}
    //timer();
    
    $scope.startTimer = function(){
        console.log('Start timer clicked');
        $scope.timerEvent = $timeout(add, 1000);
    };


    /* Stop button */
    $scope.stopTimer = function() {
        console.log('Stop timer clicked');

        $timeout.cancel($scope.timerEvent);
    };

    /* Clear button */
    $scope.clearTimer = function() {
        console.log('Clear timer clicked');

        $scope.timeContent = '00:00:00';
        $scope.seconds = 0; $scope.minutes = 0;
    }
}]);

app.controller('FillerController', '$scope', function(){
    $scope.count=
});


