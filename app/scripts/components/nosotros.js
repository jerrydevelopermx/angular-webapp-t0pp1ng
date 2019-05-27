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
                                 elementType: 'img',
                                 src: 'images/img_nosotros.png',
                                 class: 'column-image'
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
            class: 'strip-somos',
            content:  '<p>SOMOS UNA AGENCIA QUE TRABAJA BAJO LA VISIÓN DE NEGOCIO, CREATIVA Y HUMANA.</p>'
          };

          vm.equipo = {
                      class: 'content-column',
                      title: {
                        text: 'Conoce a tu equipo',
                        class: 'bebas-content'
                      },
                      description: {
                        text: '<span>JÓVENES, PROFESIONALES, EMPRENDEDORES, DIVERTIDOS,</span><span> GENIOS, MILLONARIOS, PLAYBOYS Y FILÁNTROPOS </span>',
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
                                image: 'pic01.jpg',
                                position: 'Director Creativo'
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
                                image: 'pic01.jpg',
                                position: 'Directora de marketing y estrategia'
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
                                image: 'pic01.jpg',
                                position: 'Directora de contenidos'
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
                                image: 'pic01.jpg',
                                position: 'Director de arte'
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
                                image: 'pic01.jpg',
                                position: 'Directora de imagen y relaciones públicas'
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
                                image: 'pic01.jpg',
                                position: 'Desarrollo web'
                              },
                              text: 'Comunicólogo. Con experiencia en publicidad, marketing, periodismo y  creación de contenidos. Escritor, cinéfilo, melómano y tenista de ocasión. '
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
                                name: 'Krissel Ríos',
                                image: 'pic01.jpg',
                                position: 'Arte'
                              },
                              text: 'Animadora digital. Gusto por la edición de sonido y fotografía. Fan del cine animado y live action.'
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
                                name: 'Daniel Vasquez',
                                image: 'pic01.jpg',
                                position: 'Arte'
                              },
                              text: 'Animador digital. Con experiencia en animación 2D y motion graphics. Aficionado del cine animado y la ilustración.'
                          }]
                      },
                      {
                          title: '',
                          class: 'content-column',
                          centered: true,
                          content: []
                      }]
                    }

                  ],
                    bottom :null
          };




        }


      }
})();
