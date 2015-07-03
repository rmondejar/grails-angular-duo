'use strict';

angular.module('duo', ['restangular', 'ngRoute']).
  config(function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl,
        templateUrl:'views/main.html'
      }).
      when('/edit/:authorId', {
        controller:EditCtrl,
        templateUrl:'views/detail.html',
        resolve: {
          author: function(Restangular, $route){
            return Restangular.one('authors', $route.current.params.authorId).get();
          }
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
  });
