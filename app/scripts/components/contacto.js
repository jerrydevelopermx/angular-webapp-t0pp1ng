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
        vm.contact;
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
                      },
                      {
                          elementType: 'p',
                          text: 'EMAIL: hola@toppingcreativo.com.mx'
                      }]
                    }]
          };
        }

        vm.sendEmail = function() {
          console.log(vm.contact);
          Requester.post('site/email', vm.contact).then(function(data){
            console.log(data)
          }, function(){

          });

        }
      }
})();
