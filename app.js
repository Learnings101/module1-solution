(function () {
  angular.module("LunchCheck", [])
  .controller('LunchFormController', function($scope) {
    $scope.lunches = "";
    $scope.message = "This is empty";
  });
})(); 