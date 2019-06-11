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
            class: ' black-background white-font',
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
                    { title: 'COMPAÑÍA',
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
                                            url:'#!/servicios'
                                          },
                                          /*{
                                            label:'Nuestros Clientes',
                                            url:'#!/clientes'
                                          },*/
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
                        centered: false,
                        content: [{
                                    elementType: 'ul-icons',
                                    class: 'plain',
                                    list: [
                                            {
                                              url: 'https://www.facebook.com/ToppingCreativo',
                                              label:'Facebook',
                                              target: '_blank',
                                              class: 'tp-fb'
                                            },
                                            {
                                              url: 'https://instagram.com/toppingcreativomx',
                                              label:'Instagram',
                                              target: '_blank',
                                              class: 'tp-instagram'
                                            },
                                            {
                                              url: 'https://twitter.com/toppingcreativo/',
                                              label:'Twitter',
                                              target: '_blank',
                                              class: 'tp-twitter'
                                            },
                                            {
                                              url: 'https://www.linkedin.com/company/toppingcreativo',
                                              label:'LinkedIn',
                                              target: '_blank',
                                              class: 'tp-linkedin'
                                            },

                                            {
                                              url: ' http://vm.tiktok.com/d9DnoA',
                                              label:'Tik Tok',
                                              target: '_blank',
                                              class: 'tp-tiktok'
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
