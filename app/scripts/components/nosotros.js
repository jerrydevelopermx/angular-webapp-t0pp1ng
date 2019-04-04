(function(){
    'use strict';
    angular.module('webApp')

    .component('appNosotros', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/nosotros.html',
        controller: componentController
      })

      function componentController($scope,$anchorScroll,$location){
        var vm = this;

        function anchorScroll(){
          var newHash = 'logo-div';
              if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
              } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
              }
        }

        vm.$onInit = function(){
          anchorScroll();
          vm.compromiso = {
            class: 'content-column',
            title: null,
            description: null,
            columns: [{
                      title: 'Espacio resaltador de la marca El pasaje estándar Lorem Ipsum, usado desde el año 1500.',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          class: 'justified',
                          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis'
                      }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/topping-rosa.png',
                                 class: 'column-image'
                               }]
                    }]
          };

          vm.equipo = {
                      class: 'content-column',
                      title: {
                        text: 'Conoce a tu equipo',
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
                      }]
                    },
                    {
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
                      }]
                    }

                  ],
                    bottom :null
          };




        }


      }
})();
