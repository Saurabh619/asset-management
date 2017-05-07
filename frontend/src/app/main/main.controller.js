(function() {
  'use strict';

  angular
    .module('sparsh')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {

    var update = function() {
      $http.post().then(function() {

      }).catch(function() {

      })
    }

  }
})();
