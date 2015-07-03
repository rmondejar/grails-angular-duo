'use strict';

function ListCtrl($scope, Restangular) {
  $scope.authors = Restangular.all("authors").getList().$object;
}
