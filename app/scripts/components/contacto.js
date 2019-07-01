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

      function componentController($scope, Requester){
        var vm = this;
        vm.emailSent = false;
        vm.contact;
        vm.$onInit = function(){
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
                      },
                      {
                          elementType: 'p',
                          text: 'EMAIL: hola@toppingcreativo.com.mx'
                      }]
                    }]
          };
        }

        vm.sendEmail = function() {
          Requester.post('site/email', vm.contact).then(function(data){
            vm.emailSent = true;
          }, function(){

          });

        }
      }
})();
