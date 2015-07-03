'use strict';

function EditCtrl($scope, $location, Restangular, author) {
  var original = author;
  $scope.author = Restangular.copy(original);


  $scope.isClean = function() {
    return angular.equals(original, $scope.author);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.author.put().then(function() {
      $location.path('/');
    });
  };
}
