(function () {
  "use strict";

  angular.module('public')
    .service('SignUpService', SignUpService);


  SignUpService.$inject = [];
  function SignUpService() {
    var service = this;
    var details = [];
    service.saveDetails = function (firstName, lastName, phoneNumber, email, menunumber, category_short_name, description,name) {
      var detail = {};
      detail.firstName = firstName;
      detail.lastName = lastName;
      detail.phoneNumber = phoneNumber;
      detail.email = email;
      detail.menunumber = menunumber;
      detail.category_short_name = category_short_name;
      detail.description = description;
      detail.name = name;
      details.push(detail);
    };

    service.getDetails = function () {
      return details;
    };

  }
})();
