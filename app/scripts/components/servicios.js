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
                                   src: 'images/nosotros-img-02.png',
                                   title: 'ESTUDIO DE MERCADO',
                                   text: 'Desarrollamos un estudio enfocado a los objetivos de tu empresa, analizamos e investigamos los datos necesarios para crear tu estrategia e ir más allá de lo que ves. ',
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
                    bottom : null
                  };

          vm.docs = {
            class: 'content-column blue-background',
            id: 'documentos-div',
            title: {
                    text: 'Redes de gestión de documentos',
                    class: 'subcontent-title-blue'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'p',
                                 class: 'justified',
                                 text: 'Somos distribuidores autorizados de marcas importantes como Konica Minolta y te ofrecemos un servicio integral en la venta y renta de equipos multifuncionales. Lo mejor en calidad de impresión, escaneo y sistemas de red.'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/redes.png',
                                  class: 'img-servicio'
                              }]
                  }]
          };

          vm.mantenimiento = {
            class: 'content-column',
            id: 'mantenimiento-div',
            title: {
                    text: 'Mantenimiento',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/mantenimiento.png',
                                  class: 'img-servicio'
                              }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         class: 'justified',
                         text: 'Si has adquirido algún equipo con nosotros, te ofrecemos al mejor equipo de profesionales capacitados para darle mantenimiento y renovación a tu equipo y siempre se mantenga en óptimas condiciones.'
                       }]
                  }]
          };

          vm.asesoramiento = {
            class: 'content-column blue-background',
            id: 'asesoramiento-div',
            title: {
                    text: 'Asesoramiento',
                    class: 'subcontent-title-blue'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         class: 'justified',
                         text: 'Contar con un asesor de confianza beneficia a la compañía a buscar canales de mejora y desarrollo. Te ofrecemos la mejor información y servicio para facilitar, mejorar y optimizar tu negocio con los últimos avances en tecnología.'
                        }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/servicios/asesor.png',
                                 class: 'img-servicio'
                             }]
                  }]
          };

          vm.materiales = {
            class: 'content-column',
            id: 'materiales-div',
            title: {
                    text: 'Materiales y consumibles',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/materiales.png',
                                  class: 'img-servicio'
                              }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         class: 'justified',
                         text: 'Te ofrecemos todo lo necesario para surtir papelerías y centros de negocio, con las líneas de consumibles más grandes a nivel mundial y con una gran infraestructura de desarrollo, mejora continua de productos y distribución.'
                       }]
                  }]
          };


        }
      }

})();
