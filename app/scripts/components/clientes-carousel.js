(function(){
    'use strict';
    angular.module('webApp')

    .component('clientesCarousel', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/clientes-carousel.html',
        controller: function(){

          var vm = this;

          //====================================
          // Slick 3
          //====================================
          vm.clientes = [
                      { className:'arumabin'},
                      { className:'bella-pizza'},
                      { className:'consesa'},
                      { className:'d-iris'},
                      { className:'daen'},
                      { className:'dulceria-angeles'},
                      { className:'studio-black-jeans'},
                      { className:'first-lab'},
                      { className:'yeliss'}
                    ];
          vm.asesorias = [
                      { className:'soniar-despierto'},
                      { className:'travel'}
                    ];

          vm.slickConfigLoaded = true;
          vm.slickConfigClientes = {
            method: {},
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
          vm.slickConfigAsesorias = {
            method: {},
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        }
      })


})();
