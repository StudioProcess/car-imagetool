'use strict';

/**
 * @ngdoc function
 * @name citApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the citApp
 */
angular.module('citApp')
  .controller('MainCtrl', function($log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $log.log('Controller: MainCtrl');
  });
