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
            templateUrl: 'views/grammarian.html',
            controller: 'MainController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html'
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
    $scope.toRed = 6;
    $scope.toYellowSeconds = 0;

    $scope.setTableTopic = function(){
        $scope.toYellow = 1;
        $scope.toYellowSeconds = 30;
        $scope.toRed = 2;
    };

    $scope.setIceBreaker = function(){
        $scope.toYellow = 5;
        $scope.toYellowSeconds = 0;
        $scope.toRed = 6;
    };

    function add() {
        $scope.seconds++;
        if ($scope.seconds >= 60) {
            $scope.seconds = 0;
            $scope.minutes++;
        }

        if($scope.minutes >= $scope.toYellow && $scope.seconds == $scope.toYellowSeconds && $scope.minutes < $scope.toRed){
            $scope.backGroundClass = 'yellow-bg';
        } else if($scope.minutes >= $scope.toRed) {
            //console.log('IN RED');
            $scope.backGroundClass = 'red-bg';
        }

        $scope.timeContent = "00" + ":" + ($scope.minutes ? ($scope.minutes > 9 ? $scope.minutes : "0" + $scope.minutes) : "00") + ":" + ($scope.seconds > 9 ? $scope.seconds : "0" + $scope.seconds);

        //console.log('Current time', $scope.timeContent);

        $scope.startTimer();
    }

    $scope.startTimer = function(){
        //console.log('Start timer clicked');
        $scope.timerEvent = $timeout(add, 1000);
    };


    /* Stop button */
    $scope.stopTimer = function() {
        //console.log('Stop timer clicked');

        $timeout.cancel($scope.timerEvent);
    };

    /* Clear button */
    $scope.clearTimer = function() {
        //console.log('Clear timer clicked');

        $scope.timeContent = '00:00:00';
        $scope.seconds = 0; $scope.minutes = 0;
    }
}]);




