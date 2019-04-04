(function(){
    'use strict';
    angular.module('webApp')

    .component('appPortafolio', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/portafolio.html',
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
          vm.bannerConfig = {
                            type: 'image',
                            src: 'images/banner2.jpg'
                          };

          anchorScroll();

          vm.branding = {
            class: 'content-column',
            title: {
              text: 'BRANDING',
              class: ''
            },
            description: null,

              columns: [{
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/p1.png',
                                   class: ''
                                 }]
                       },
                       {
                         title: '',
                         class: 'content-column',
                         centered: true,
                         content: [{
                                    elementType: 'img',
                                    src: 'images/p2.png',
                                    class: ''
                                  }]
                        },
                        {
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: [{
                                     elementType: 'img',
                                     src: 'images/p3.png',
                                     class: ''
                                   }]
                         }
                     ],

            bottom : null
          };
          vm.ilustracion = {
            class: 'content-column',
            title: {
              text: 'ILUSTRACIÓN',
              class: ''
            },
            description: null,

              columns: [{
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/ilustracion.png',
                                   class: 'column-image'
                                 }]
                       }],

            bottom : null
          };

          vm.publicidad = {
            class: 'content-column',
            title: {
              text: 'PUBLICIDAD',
              class: ''
            },
            description: null,
            rows: [{
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'img',
                           src: 'images/pub1.png',
                           class: ''
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/pub2.png',
                                   class: ''
                                 }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                  elementType: 'img',
                                  src: 'images/pub3.png',
                                  class: ''
                                }]
                     }]
            },
            {
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'img',
                           src: 'images/pub4.png',
                           class: ''
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/pub5.png',
                                   class: ''
                                 }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                  elementType: 'img',
                                  src: 'images/pub6.png',
                                  class: ''
                                }]
                     }]
            }
          ],
            bottom : null
          };

          vm.fotografia = {
            class: 'content-column',
            title: {
              text: 'FOTOGRAFIA',
              class: ''
            },
            description: null,
            rows: [{
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'img',
                           src: 'images/foto1.png',
                           class: ''
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/foto2.png',
                                   class: ''
                                 }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                  elementType: 'img',
                                  src: 'images/foto3.png',
                                  class: ''
                                }]
                     }]
            },
            {
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                           elementType: 'img',
                           src: 'images/foto4.png',
                           class: ''
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/foto5.png',
                                   class: ''
                                 }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                  elementType: 'img',
                                  src: 'images/foto6.png',
                                  class: ''
                                }]
                     }]
            }
          ],
            bottom : null
          };

        }


      }
})();
