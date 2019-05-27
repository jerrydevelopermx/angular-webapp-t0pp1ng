(function(){
    'use strict';
    angular.module('webApp')

    .component('appContacto', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/contacto.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          //console.log($compile('<app-location></app-location>')(vm))
          vm.contacto = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: 'Visítanos en',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          text: '5 SUR 2901 A INTERIOR 4 COLONIA CHULAVISTA, PUEBLA, PUE.'
                      }]
                    }]
          };
        }
      }
})();
