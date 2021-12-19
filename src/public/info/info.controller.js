(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService'];
function InfoController(SignUpService) {
  var infoCtrl = this;
  var info;  
  infoCtrl.getDetails = SignUpService.getDetails();
}

})();
