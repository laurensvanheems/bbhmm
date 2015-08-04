var app = angular.module('bbhmmApp', [
  //'ngAnimate'
])

.controller('bbhmmFormCtrl', ['$scope', function($scope) {
  $scope.venmoParams = {};

  $scope.constructVenmo = function(value, type) {
    var venmoUrl = 'https://venmo.com/?txn=charge&audience=public',
        params = '';

    if(value === '') {
      delete $scope.venmoParams[type];
    } else {
      $scope.venmoParams[type] = value;
    }

    angular.forEach($scope.venmoParams, function(key, value){
      params += '&' + value + '=' + key;
    });

    if($scope.bitch && $scope.money) {
      $scope.showVenmo = true;
    } else {
      $scope.showVenmo = false;
    }

    $scope.venmoUrl = venmoUrl + params;
  };

}])

.directive('bbhmmForm', [function() {
  return {
    restrict: 'AE',
    scope: true,
    controller: 'bbhmmFormCtrl'
  };
}])

.directive('bbhmmHeader', ['$window', function($window) {
  return {
    restrict: 'AE',
    scope: true,
    link: function(scope, elem, attr){

    }
  };
}]);
