'use strict';

/**
 * @ngdoc function
 * @name italkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the italkApp
 */
angular.module('italkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
