var module = angular.module("sampleModalModule", []);
module.controller("ModalDlgController", ["$scope", function ($scope) {
   $scope.someValueField = "";
   
   $scope.modalButtonClick = function () {
      console.log("do action on Modal");
      console.log("Current 'someValueField' value is [[" + $scope.someValueField + "]]");
   };
}]);