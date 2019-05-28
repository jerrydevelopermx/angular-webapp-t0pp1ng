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
          /*vm.bannerConfig = {
                            type: 'video',
                            src: 'images/Topping_1.mp4'
                          }; */
          vm.servicios = {
            class: 'content-column',
            title: {
              text: 'Nuestros Servicios',
              class: 'bebas-content'
            },
            description: null,
            rows: [{
              columns: [{
                title: '',
                class: 'content-column',
                centered: true,
                content: [{
                          elementType: 'card',
                          elementClass: 'card-element',
                          cardContentClass: 'servicio-card',
                          title: '',
                          type: 'imageContent',
                          text: 'MERCADOTECNIA Y ESTRATEGIA',
                          image:'iconos/merca-estrategia-on.png',
                          class: 'icon-servicios'
                         }]
                       },
                       {
                        title: '',
                        class: 'content-column',
                        centered: true,
                        content: [{
                                  elementType: 'card',
                                  elementClass: 'card-element',
                                  cardContentClass: 'servicio-card',
                                  title: '',
                                  type: 'imageContent',
                                  text: 'PUBLICIDAD Y DISEÑO',
                                  image:'iconos/publi-diseno-active-on.png',
                                  class: 'icon-servicios'
                                 }]
                      },
                      {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                 elementType: 'card',
                                 elementClass: 'card-element',
                                 cardContentClass: 'servicio-card',
                                 title: '',
                                 type: 'imageContent',
                                 text: 'DIGITAL Y SOCIAL MEDIA',
                                 image:'iconos/digital-social-on.png',
                                 class: 'icon-servicios'
                                }]
                     },
                     {
                       title: '',
                       class: 'content-column',
                       centered: true,
                       content: [{
                                 elementType: 'card',
                                 elementClass: 'card-element',
                                 cardContentClass: 'servicio-card',
                                 title: '',
                                 type: 'imageContent',
                                 text: 'IMAGEN Y RELACIONES PÚBLICAS',
                                 image:'iconos/imagen-rels-on.png',
                                 class: 'icon-servicios'
                                }]
                    }]
            }],
            bottom : {
              class: '',
              content: [{
                          elementType: 'ul',
                          class: 'actions centered',
                          list: [{
                                    label:'VER MÁS',
                                    class:'button medium',
                                    url:'#!/servicios'
                                }]

                        }]
            }
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
                                     src: 'images/iconos/asesoria-consultoria-on.png',
                                     class: 'icon-servicios-big'
                                   }]
                      },
                      {
                          title: '',
                          class: 'content-column bebas-content',
                          centered: true,
                          content: [{
                                    elementType: 'p',
                                    class: 'asesoria-content',
                                    text: 'ASESORÍA Y CONSULTORÍA'
                                  },
                                  {
                                    elementType: 'ul',
                                    class: 'actions centered',
                                    list: [{
                                      label:'AGENDA TU CITA',
                                      class:'button medium button-margin',
                                      url:'#!/contacto'
                                    }]
                                  }]
                      }
                    ],
                      bottom :null
          };

          vm.stripQuienes = {
            title: 'QUIÉNES SOMOS',
            class: 'strip-nosotros',
            content:  '<p>Nos tomamos el tiempo para disfrutar una taza de café, platicar, entender y conectar emocionalmente con cada socio y su marca, una familia de creativos que se apasiona por cosechar éxitos.</p>'
          };
          vm.stripMetodo = {
            title: 'MÉTODO TOPPING',
            class: 'strip-metodo',
            content:  `<div class="ol-container">
                        <ol class="custom-counter">
                          <li>Escuchamos y entendemos tu idea</li>
                          <li>Investigamos el mercado</li>
                          <li>Diseñamos estrategias </li>
                          <li>CREAMOS CONTENIDOS ATRACTIVOS </li>
                          <li>GENERAMOS COMUNIDADES</li>
                          <li>ANALIZAMOS LOS RESULTADOS</li>
                        </ol>
                      </div>`
          };


        };

      }

})();
