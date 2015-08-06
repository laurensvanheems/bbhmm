var app = angular.module('bbhmmApp', [
  //'ngAnimate'
])

.controller('bbhmmFormCtrl', ['$scope', '$document', function($scope, $document) {
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

  $document[0].addEventListener('keyup', function(event){
    if($scope.showVenmo && event.keyCode == 13){
      $document[0].querySelector('.bbhmm__venmo').click();
    }
  });

}])

.directive('bbhmmForm', [function() {
  return {
    restrict: 'AE',
    scope: true,
    controller: 'bbhmmFormCtrl'
  };
}]);
