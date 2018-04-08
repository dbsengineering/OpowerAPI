'use strict';

/**
 * @ngdoc function
 * @name opowerApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the opowerApiApp
 */
angular.module('opowerApiApp')
  .controller('MainCtrl',  ['$scope', '$http', '$route', 'personFactory', function ($scope, $http, $route, personFactory) {

    // --- Generate ---
    $scope.generate = function () {

      $http({
        url: 'http://localhost:9000/createFictif',
        method: "POST",
      }).then(function(response) {
          $scope.resp = response;//JSON.stringify(response, undefined, 4);
        },
        function(response) {
          console.log(response);
          $scope.resp = "Erreur : /createFictif : " + response;//JSON.stringify(response, undefined, 4);
        });
    };


  }],
    function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
