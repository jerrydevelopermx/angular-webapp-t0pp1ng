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
          var newHash = ($stateParams.div) ? $stateParams.div + '-div': 'logo-div';
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

          vm.servicios = {
            class: 'content-column',
            title: {
              text: '',
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
                          src:'images/iconos/merca-estrategia-off.png',
                          class: 'icon-servicios servicios-group'
                        },
                        {
                          elementType: 'ul',
                          class: 'pink-content listServicios',
                          list: [{
                                    label:'ESTUDIO DE MERCADO'
                                  },
                                  {
                                    label:'ANÁLISIS DE TENDENCIAS'
                                  },
                                  {
                                    label:'SHOPPER MARKETING'
                                  }]
                        },
                        {
                          elementType: 'p',
                          class: 'centered pink-content',
                          text: 'MERCADOTECNIA Y ESTRATEGIA'
                        }]
                       },
                       {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                 elementType: 'img',
                                 src:'images/iconos/digital-social-off.png',
                                 class: 'icon-servicios'
                                },
                                {
                                  elementType: 'p',
                                  class: 'centered pink-content',
                                  text: 'DIGITAL Y SOCIAL MEDIA'
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
                                  src:'images/iconos/publi-diseno-off.png',
                                  class: 'icon-servicios'
                                },
                                ,
                                {
                                  elementType: 'p',
                                  class: 'centered pink-content',
                                  text: 'PUBLICIDAD Y DISEÑO'
                                }]
                      },
                     {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                 elementType: 'img',
                                 src:'images/iconos/imagen-rels-off.png',
                                 class: 'icon-servicios'
                                },
                                {
                                  elementType: 'p',
                                  class: 'centered pink-content',
                                  text: 'IMAGEN Y RELACIONES PÚBLICAS'
                                }]
                    }]
            }
          ],
            bottom : null
          };

                  vm.asesoria = {
                                        class: 'content-column',
                                        title: {
                                          text: '',
                                          class: ''
                                        },
                                        description: null,
                                        columns: [{
                                            title: '',
                                            class: 'content-column',
                                            centered: true,
                                            content: [{
                                                       elementType: 'img',
                                                       src: 'images/iconos/asesoria-consultoria-off.png',
                                                       class: 'icon-servicios-big'
                                                     }]
                                        },
                                        {
                                            title: '',
                                            class: 'content-column',
                                            centered: true,
                                            content: [{
                                                      elementType: 'p',
                                                      class: 'pink-subtitle',
                                                      text: 'ASESORÍA Y CONSULTORÍA'
                                                    },
                                                    {
                                                      elementType: 'p',
                                                      text: 'No importa de que tamaño sea tu proyecto, nosotros podemos ayudarte a hacerlo crecer. Si eres un emprendedor, tienes una PYME o una asociación, tenemos el conocimiento necesario para encontrar '
                                                            + 'juntos esas oportunidades que estás buscando.'
                                                    },
                                                    {
                                                      elementType: 'ul',
                                                      class: 'actions centered',
                                                      list: [{
                                                        label:'AGENDA TU CITA',
                                                        class:'button medium',
                                                        url:'#!/contacto'
                                                      }]
                                                    }]
                                        }
                                      ],
                                        bottom :null
                            };




        }
      }

})();
