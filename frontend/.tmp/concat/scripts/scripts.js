'use strict';

angular.module('duo', ['restangular', 'ngRoute']).
  config(["$routeProvider", "RestangularProvider", function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl,
        templateUrl:'views/main.html'
      }).
      when('/edit/:authorId', {
        controller:EditCtrl,
        templateUrl:'views/detail.html',
        resolve: {
          author: ["Restangular", "$route", function(Restangular, $route){
            return Restangular.one('authors', $route.current.params.authorId).get();
          }]
        }
      }).
      when('/create', {controller:CreateCtrl, templateUrl:'views/detail.html'}).
      otherwise({redirectTo:'/'});

    RestangularProvider.setBaseUrl('/duo/api');
    RestangularProvider.setRequestInterceptor(function(elem, operation, what) {

      if (operation === 'put') {
        elem._id = undefined;
        return elem;
      }
      return elem;
    })
  }]);

'use strict';

function ListCtrl($scope, Restangular) {
  $scope.authors = Restangular.all("authors").getList().$object;
}
ListCtrl.$inject = ["$scope", "Restangular"];

'use strict';

function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('authors').post($scope.author).then(function(author) {
      $location.path('/list');
    });
  }
}
CreateCtrl.$inject = ["$scope", "$location", "Restangular"];

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
EditCtrl.$inject = ["$scope", "$location", "Restangular", "author"];
