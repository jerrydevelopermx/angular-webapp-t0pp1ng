(function(){
    'use strict';
    angular.module('webApp')

    .component('servicesDetail', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/services-detail.html',
        controller: function(){
          var vm = this;
        }
      })


})();
