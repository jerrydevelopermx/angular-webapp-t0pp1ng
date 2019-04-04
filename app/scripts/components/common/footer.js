(function(){
    'use strict';
    angular.module('webApp')

    .component('footerComp', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/footer.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.footer = {
            class: ' black-background',
            title: null,
            description: null,
            columns: [{
                      title: '',
                      class: '',
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/topping-rosa.png',
                                 class: 'logo-footer'
                               }]
                    },
                    { title: '',
                      class: '',
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                  elementType: 'ul',
                                  class: 'alt',
                                  list: [{
                                            label:'Más sobre nosotros',
                                            url:'#!/nosotros'
                                          },
                                          {
                                            label:'Nuestros servicios',
                                            url:'#!/'
                                          },
                                          {
                                            label:'Nuestros Clientes',
                                            url:'#!/'
                                          },
                                          {
                                            label:'Contacto',
                                            url:'#!/contacto'
                                          }]
                                }]
                      },
                      {
                        title: '¡Síguenos!',
                        titleClass:'centered',
                        class: '',
                        centered: true,
                        content: [{
                                    elementType: 'ul-icons',
                                    class: 'plain',
                                    list: [
                                            {
                                              url: 'https://www.facebook.com/ToppingCreativo.com.mx/',
                                              label:'Facebook',
                                              class: 'icon fa-facebook'
                                            },
                                            {
                                              url: 'https://instagram.com/toppingcreativomx',
                                              label:'Instagram',
                                              class: 'icon fa-instagram'
                                            }
                                          ]

                                  }]
                      }],
              bottom : {
                class: '',
                content: [{
                           elementType: 'p',
                           class: 'centered',
                           text: '2019. Topping Creativo. CREAMOS - CREEMOS - CRECEMOS. Todos los derechos reservados. '
                }]
              }
          };

        }
      }

})();
