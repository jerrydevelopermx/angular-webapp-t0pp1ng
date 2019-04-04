(function(){
    'use strict';
    angular.module('webApp')

    .component('bannerComp', {
        bindings: {
          config: '='
        },
        templateUrl: 'views/common/banner.html',
        controller: componentController


      });

      function componentController() {
        var vm = this;

        vm.$onInit = function(){
          console.log(vm)
        }

      }
})();
