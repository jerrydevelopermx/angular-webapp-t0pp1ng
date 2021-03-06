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
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'html',
                                 html: '<div class="nosotros-content-div"><div class="nosotros-content-small">SOMOS UNA AGENCIA</div><div class="nosotros-content-medium gotham-medium-content"> DE CREATIVIDAD</div><div class="nosotros-content-big gotham-big-content"> APLICADA</div></div>'
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

          vm.stripSomos = {
            title: '',
            class: 'strip-somos gothan-thin-content',
            content:  '<p>SOMOS UNA AGENCIA QUE TRABAJA BAJO UNA VISIÓN DE NEGOCIO, CREATIVA Y HUMANA.</p>'
          };

          vm.equipo = {
                      class: 'content-column',
                      title: {
                        text: 'Conoce a tu equipo',
                        class: 'bebas-content'
                      },
                      description: {
                        text: '<span class="pink-subtitle gotham-medium-content">JÓVENES, PROFESIONALES, EMPRENDEDORES, DIVERTIDOS,</span><span class="gray-subtitle"> GENIOS, MILLONARIOS, PLAYBOYS Y FILÁNTROPOS </span>',
                        class: 'subcontent-title justified'
                      },
                    rows: [{
                      columns: [{
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Omar Villaseñor',
                                image: '',
                                position: 'Director Creativo',
                                twitter: '@omarvzayas'
                              },
                              text: 'Comunicólogo. Con experiencia en publicidad, marketing, periodismo y  creación de contenidos. Escritor, cinéfilo, melómano y tenista de ocasión.'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Gabriela Sánchez',
                                image: '',
                                position: 'Directora de marketing y estrategia',
                                twitter: '@soyabbys'
                              },
                              text: 'Mercadóloga. Con experiencia en investigación de mercados, marketing y propuestas de valor. Bailarina, apasionada de los animales y los viajes.'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Angélica García',
                                image: '',
                                position: 'Directora de contenidos',
                                twitter: '@aegahe'
                              },
                              text: 'Mercadóloga. Con amplitud en community management, estrategia digital e investigación de mercados.  Escritora, amante de la naturaleza y aprendiz de la guitarra acústica.'
                          }]
                      }]
                    },
                    {
                      columns: [{
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Samuel García',
                                image: '',
                                position: 'Director de arte',
                                twitter: '@soymrsam'
                              },
                              text: 'Diseñador gráfico. Con desarrollo en branding, fotografía, edición digital de imagen, lettering y creación de contenidos.'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Sandra Herrera',
                                image: '',
                                position: 'Directora de imagen y relaciones públicas',
                                twitter: '@sanhm22'
                              },
                              text: 'Diseñadora gráfica. Especialista en relaciones públicas e imagen personal. Romántica, alegre y entregada a las actividades altruistas.'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: false,
                          content: [{
                              elementType: 'card',
                              cardContentClass: 'perfil-card',
                              class: 'justified',
                              type:'profile',
                              author: {
                                name: 'Gerardo García',
                                image: '',
                                position: 'Desarrollo web',
                                twitter: '@jerrydevmx'
                              },
                              text: 'Ing. en Sistemas. Desarrollador de Software, especializado en tecnologías web. Amante de los deportes, los viajes, la guitarra y cualquier otro instrumento musical.'
                          }]
                      }]
                    }
                  ],
                    bottom :null
          };




        }


      }
})();
