var app = angular.module('bbhmmApp', [
  'ngAnimate'
])

// Controller loaded when gallery/:id
.controller('bbhmmFormCtrl', ['$scope', function($scope) {
  $scope.venmoParams = {};

  $scope.constructVenmo = function(value, type) {
    var venmoUrl = 'https://venmo.com/?txn=charge&audience=public',
        params = '';

    if(value == '') {
      delete $scope.venmoParams[type];
    } else {
      $scope.venmoParams[type] = value;
    }
    
    angular.forEach($scope.venmoParams, function(key, value){
      params += '&' + value + '=' + key;
    })

    $scope.venmoUrl = venmoUrl + params;

  }

}])

// Directive for setting endpoint url
.directive('bbhmmForm', [function() {
  return {
    restrict: 'AE',
    scope: true,
    controller: 'bbhmmFormCtrl'
  };
}]);
