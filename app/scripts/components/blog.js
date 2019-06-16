(function(){
    'use strict';
    angular.module('webApp')

    .component('appBlog', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/blog.html',
        controller: function($scope, $anchorScroll, $location) {
          var vm = this;

          vm.$onInit = function(){
            anchorScroll();



            vm.posts = {
                        class: 'content-column',
                        title: null,
                        description: null,
                      rows: [{
                        columns: [{
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog1.png',
                                topic: 'MARKETING',
                                description: '¡5 tips que te ayudarán a tener contento a ese cliente exigente!'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog2.png',
                                topic: 'MARKETING',
                                description: 'Tengo una idea de negocio, ¿y ahora?'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog2.png',
                                topic: 'MARKETING DIGITAL',
                                description: 'Ventajas del uso de redes sociales en tu negocio'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog3.png',
                                topic: 'IMAGEN Y RRPP',
                                description: '¿Cómo generar lealtad con mis clientes?'
                            }]
                        }]
                      },
                      {
                        columns: [{
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog4.png',
                                topic: 'DISEÑO',
                                description: '4 claves de un exitoso branding para PYMES'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog5.png',
                                topic: 'IMAGEN Y RRPP',
                                description: 'Ya tengo mi negocio y ahora, ¿cómo hago networking?'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog6.png',
                                topic: 'DISEÑO',
                                description: '¡Dale color a tu marca!'
                            }]
                        },
                        {
                            title: '',
                            class: 'content-column-blog',
                            centered: false,
                            content: [{
                                elementType: 'card',
                                elementClass: 'post-card',
                                cardContentClass: 'perfil-card',
                                class: 'justified',
                                type:'post',
                                cover: 'blog/blog7.png',
                                topic: 'IMAGEN Y RRPP',
                                description: 'Mejora tu comunicación, trabaja en tu personal branding'
                            }]
                        }]
                      }
                    ],
                      bottom :null
            };
          }



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

        }
      })


})();
