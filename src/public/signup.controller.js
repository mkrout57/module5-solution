(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService', 'MenuAvailableService', '$scope'];
  function SignUpController(SignUpService, MenuAvailableService, $scope) {
    var signUpCtrl = this;
    var shortName = [];
    signUpCtrl.isPresent = false;

    signUpCtrl.saveDetails = function (user) {

      var menuAvailable = MenuAvailableService.getAllMenuItems(user.menunumber);
      menuAvailable
        .then(function (response) {
          shortName.push(response.data.short_name);
          signUpCtrl.isPresent = shortName.find(function (element) {
            if (element == user.menunumber) {
              return true;
            }
          }) ? false : true;

          if (!signUpCtrl.isPresent) {
            SignUpService.saveDetails(user.firstName, user.lastName, user.phoneNumber, user.email, user.menunumber, response.data.category_short_name, response.data.description, response.data.name);
            signUpCtrl.class = "alert alert-success";
            signUpCtrl.message = "Your information has been saved.";
          }
        }).catch(function (errorResponse) {
          signUpCtrl.isPresent = true;
        });

    };
  }

})();
