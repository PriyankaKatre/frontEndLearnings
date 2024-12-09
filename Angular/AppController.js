var app = angular.module("sampleAngularApp", [ "sampleModalModule" ]);
app.controller("AppController", ["$scope", function ($scope) {
   $scope.openDlg = function () {
      console.log("clicked here...");
      
      var dlgElem = angular.element("#modalDlg");
      if (dlgElem) {
         dlgElem.modal("show");
      }
   };
}]);