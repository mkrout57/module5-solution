(function () {
  "use strict";

  angular.module('public')
    .service('MenuAvailableService', MenuAvailableService);


  MenuAvailableService.$inject = ['$http'];
  function MenuAvailableService($http) {
    var service = this;

    service.getAllMenuItems = function (menunumber) {
      var req = $http({
        method: "GET",
        url: ("https://mrout-server.herokuapp.com/menu_items/" + menunumber + ".json")
      });
      return req;
    }
  }
})();
