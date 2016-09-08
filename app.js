(function () {
  'use strict'; 

  angular.module("LunchCheck", [])

  .controller('LunchFormController', function($scope) {
    $scope.lunches = "";
    $scope.message = "";

    $scope.displayMessage = function () {
      var count = countLunches($scope.lunches);
      if(!count) $scope.message = "Please enter data first";
      if(count && count <= 3) $scope.message = "Enjoy!";
      else if(count > 3)  $scope.message = "Too much!";
    };

    var countLunches = function (str) {
      if(str.length === 0) return 0;
      var lunchArray = str.split(',');
      return lunchArray.length;
    };

  });

})(); 