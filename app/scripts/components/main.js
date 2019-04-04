(function(){
    'use strict';
    angular.module('webApp')

    .component('appMain', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/main.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){

          vm.bannerConfig = {
                            type: 'video',
                            src: 'images/Topping_1.mp4'
                          };

          vm.presentacion = {
                      class: 'content-column',
                      title: null,
                      description: null,
                      columns: [{
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: [{
                                     elementType: 'p',
                                     class: 'justified',
                                     text: 'Creamos marcas que inspiran, comprenden y conectan con tu mercado potencial.'
                                   },
                                   {
                                      elementType: 'p',
                                      class: 'justified',
                                      text: 'Comunicamos las cualidades de tu marca, haciendo uso de la investigación y las nuevas herramientas tecnológicas.'
                                    }]
                      }],
                      bottom :null
          };


          vm.servicios = {
            class: 'content-column',
            title: {
              text: 'Algunos de Nuestros Servicios',
              class: ''
            },
            description: null,
            rows: [{
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'card',
                           src: 'images/nosotros-img-02.png',
                           title: 'ESTUDIO DE MERCADO',
                           text: 'Desarrollamos un estudio enfocado a los objetivos de tu empresa, analizamos e investigamos los datos necesarios para crear tu estrategia. ',
                           class: ''
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'card',
                            class: 'justified',
                            title:'BRANDING',
                            text: 'Le damos personalidad a tu empresa, identificamos su razón de ser, creamos una esencia para que llegue a tus clientes perfectos.'
                        }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                           elementType: 'card',
                           title: 'IMAGEN CORPORATIVA',
                           class: 'justified',
                           text: 'Identificamos los atributos y valores que identifican tu empresa y las convertimos en un símbolo que refleje calidad, fiabilidad y unicidad'
                       }]
                     }]
            }],
            bottom : {
              class: '',
              content: [{
                          elementType: 'ul',
                          class: 'actions centered',
                          list: [{
                                    label:'Ver más',
                                    class:'button medium',
                                    url:'#!/servicios'
                                }]

                        }]
            }
          };

          vm.testimonios = {
                      class: 'content-column',
                      title: {
                        text: 'Casos de éxito',
                        class: ''
                      },
                      description: null,
                      columns: [{
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: [{
                              elementType: 'card',
                              class: 'justified',
                              type:'blockquote',
                              author: {
                                name: 'Jane Doe',
                                image: 'pic01.jpg',
                                position: 'CEO - ABC Inc.'
                              },
                              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  perspiciatis'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: [{
                              elementType: 'card',
                              class: 'justified',
                              type:'blockquote',
                              author: {
                                name: 'John Doe',
                                image: 'pic03.jpg',
                                position: 'CEO - ABC Inc.'
                              },
                              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  perspiciatis'

                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: [{
                              elementType: 'card',
                              class: 'justified',
                              type:'blockquote',
                              author: {
                                name: 'Janeth Smith',
                                image: 'pic02.jpg',
                                position: 'CEO - ABC Inc.'
                              },
                              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  perspiciatis'

                          }]
                      }],
                      bottom :null
          };

        };

      }

})();
