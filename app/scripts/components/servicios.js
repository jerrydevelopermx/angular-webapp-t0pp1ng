(function(){
    'use strict';
    angular.module('webApp')

    .component('appServicios', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/servicios.html',
        controller: componentController
      })

      function componentController($scope, $rootScope, $anchorScroll,$location, $stateParams){
        var vm = this;

        function anchorScroll(){
          var newHash = ($stateParams.servicio) ? $stateParams.servicio + '-div': 'logo-div';
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
          //console.log($stateParams);
          //if($stateParams.servicio){
            anchorScroll();
          //}



          vm.presentacion = {
                      class: 'content-column',
                      id: 'main-div',
                      title: {
                              text: '',
                              class: 'subcontent-title-white'
                            },
                      description: {
                                    text: 'Nos tomamos el tiempo para disfrutar una taza de café, platicar, entender y conectar emocionalmente con cada socio y su marca, una familia de creativos que se apasiona por cosechar éxitos.',
                                    class: 'subcontent-title justified'
                                  },
                      columns: []
                  };

                  vm.servicios = {
                    class: 'content-column',
                    title: {
                      text: 'SERVICIOS',
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
                                  title: '',
                                  type: 'imageContent',
                                  text: 'ESTUDIO DE MERCADO',
                                  image:'not-found.png',
                                  class: ''
                                 }]
                               },
                               {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                          elementType: 'card',
                                          title: '',
                                          type: 'imageContent',
                                          text: 'BRANDING',
                                          image:'not-found.png',
                                          class: ''
                                         }]
                              },
                              {
                               title: '',
                               class: 'content-column',
                               centered: true,
                               content: [{
                                         elementType: 'card',
                                         title: '',
                                         type: 'imageContent',
                                         text: 'IMAGEN CORPORATIVA',
                                         image:'not-found.png',
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
                                  elementType: 'card',
                                  title: '',
                                  type: 'imageContent',
                                  text: 'ANIMACION DIGITAL',
                                  image:'not-found.png',
                                  class: ''
                                 }]
                               },
                               {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                          elementType: 'card',
                                          title: '',
                                          type: 'imageContent',
                                          text: 'DISEÑO WEB',
                                          image:'not-found.png',
                                          class: ''
                                         }]
                              },
                              {
                               title: '',
                               class: 'content-column',
                               centered: true,
                               content: [{
                                         elementType: 'card',
                                         title: '',
                                         type: 'imageContent',
                                         text: 'SOCIAL MEDIA',
                                         image:'not-found.png',
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
                                  elementType: 'card',
                                  title: '',
                                  type: 'imageContent',
                                  text: 'CAMPAÑAS MAILING',
                                  image:'not-found.png',
                                  class: ''
                                 }]
                               },
                               {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                          elementType: 'card',
                                          title: '',
                                          type: 'imageContent',
                                          text: 'ANALISIS DE TENDENCIAS',
                                          image:'not-found.png',
                                          class: ''
                                         }]
                              },
                              {
                               title: '',
                               class: 'content-column',
                               centered: true,
                               content: [{
                                         elementType: 'card',
                                         title: '',
                                         type: 'imageContent',
                                         text: 'FOTOGRAFIA',
                                         image:'not-found.png',
                                         class: ''
                                        }]
                             }]
                    },{
                      columns: [{
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                  elementType: 'card',
                                  title: '',
                                  type: 'imageContent',
                                  text: 'VIDEO CORPORATIVO',
                                  image:'not-found.png',
                                  class: ''
                                 }]
                               },
                               {
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                          elementType: 'card',
                                          title: '',
                                          type: 'imageContent',
                                          text: 'EDICIÓN DE AUDIO',
                                          image:'not-found.png',
                                          class: ''
                                         }]
                              },
                              {
                               title: '',
                               class: 'content-column',
                               centered: true,
                               content: [{
                                         elementType: 'card',
                                         title: '',
                                         type: 'imageContent',
                                         text: 'ILUSTRACIÓN DIGITAL',
                                         image:'not-found.png',
                                         class: ''
                                        }]
                             }]
                    }

                  ],
                    bottom : null
                  };

                  vm.clientes = {
                    class: 'content-column',
                    title: {
                      text: 'CLIENTES',
                      class: ''
                    },
                    description: null,

                      columns: [{
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                   elementType: 'img',
                                   src: 'images/clientes.png',
                                   class: 'clientes-img'
                                 }]
                               }],

                    bottom : null
                  };



        }
      }

})();
