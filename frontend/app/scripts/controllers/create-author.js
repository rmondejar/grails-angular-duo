'use strict';

function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('authors').post($scope.author).then(function(author) {
      $location.path('/list');
    });
  }
}
