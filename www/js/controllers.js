angular.module('starter.controllers', [])

.controller('DictCtrl', function($scope, $stateParams, Dict) {
  $scope.start_char = $stateParams.start_char;
  $scope.dict = Dict.get($scope.start_char);
  $scope.dict_set = $scope.dict[$stateParams.dict_set];
  $scope.dict_set_key = function(dict_set) {
    for (var k in dict_set) {
      return k;
    }
  }
  
  $scope.dict_set_name = function(dict_set) {
    for (var k in dict_set) {
      return k;
    }
  }
  
  $scope.dict_set_name = function(dict_set) {
    var n = '', count = 0;
    for (var k in dict_set) {
      if (count < 2) {
        n = n + (count > 0 ? ' / ' : '') + k;
        count++;
      }
    }
    
    return n;
  }
})
