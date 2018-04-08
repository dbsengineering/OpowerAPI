'use strict';

/**
 * @ngdoc function
 * @name opowerApiApp.controller:PersonneCtrl
 * @description
 * # PersonneCtrl
 * Controller of the opowerApiApp
 */
angular.module('opowerApiApp')
  .controller('PersonneCtrl', ['$scope', '$http', '$route', 'personFactory', function ($scope, $http, $route, personFactory) {

    // --- Get All Persons ---
    $scope.getAllPerson = function(){
      $http.get('http://localhost:9000/allPerson').then(function(response){
        $scope.jsonPerson = JSON.stringify(response, undefined, 4);
      }, function (response) {
        $scope.jsonPerson = "Erreur : getAllPerson/ : " + JSON.stringify(response, undefined, 4);
      });
    };

    // --- Create person ---
    $scope.createPerson = function () {

      $http({
        url: 'http://localhost:9000/createPerson',
        method: "POST",
        params: $scope.person
      }).then(function(response) {
            $scope.jsonCreatePerson = response;//JSON.stringify(response, undefined, 4);
          },
          function(response) {
        console.log(response);
            $scope.jsonCreatePerson = "Erreur : createPerson/ : " + response;//JSON.stringify(response, undefined, 4);
          });
    };

    // --- Delete person ---
    $scope.deletePerson = function(){
      $http.delete('http://localhost:9000/deletePerson?id='+$scope.person.id).then(function(response){
        $scope.jsonDeletePerson = response;//JSON.stringify(response, undefined, 4);
      }, function (response) {
        $scope.jsonDeletePerson = "Erreur : deletePerson/ : " + response;//JSON.stringify(response, undefined, 4);
      });
    };

  }], function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .factory('personFactory', function ($resource) {
    return $resource('http://localhost:9000/allPerson', {}, {
      show: {
        url: 'http://localhost:9000/',
        method: 'GET',
        cache: false,
        isArray: true
      },
      update: {method: 'PUT', params: {data: 'data'}},
    });
  });
