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
                      { className:'arumabin' },
                      { className:'bella-pizza', url: 'https://www.facebook.com/labellapizzamx/'},
                      { className:'consesa', url: 'http://consesa.com.mx'},
                      { className:'d-iris', url: 'https://www.facebook.com/dirismx'},
                      { className:'daen', url: 'https://www.facebook.com/profile.php?id=100009717436642'},
                      { className:'dulceria-angeles', url: 'https://www.facebook.com/Dulcer%C3%ADa-Ángeles-2099510860142660'},
                      { className:'studio-black-jeans', url: 'https://www.facebook.com/StudioBlackJeans'},
                      { className:'first-lab', url: 'http://firstlab.mx'},
                      { className:'yeliss', url: 'https://www.facebook.com/YelissOficial'},
                      { className:'tem'},

                    ];
          vm.asesorias = [
                      { className:'soniar-despierto'},
                      { className:'travel'},
                      { className:'pub-imagen'}
                    ];

          vm.slickConfigLoaded = true;
          vm.slickConfigClientes = {
            autoplay: true,
            method: {},
            dots: true,
            infinite: true,
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
            autoplay: true,
            dots: true,
            infinite: true,
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

        }
      })


})();
