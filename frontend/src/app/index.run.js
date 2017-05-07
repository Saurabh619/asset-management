(function() {
  'use strict';

  angular
    .module('sparsh')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
