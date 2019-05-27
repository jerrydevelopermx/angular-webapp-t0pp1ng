(function(){
    'use strict';
    angular.module('webApp')

    .component('stripContent', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/strip-content.html',
        controller: function(){
          var vm = this;
        }
      })


})();
