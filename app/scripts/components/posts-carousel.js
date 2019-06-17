(function(){
    'use strict';
    angular.module('webApp')

    .component('postsCarousel', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/posts-carousel.html',
        controller: function(Requester){

          var vm = this;
          vm.topPosts;
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
          vm.slickConfig = {
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

          vm.$onInit = function(){
            getTopPosts();
          }

          function getTopPosts(){
            Requester.get('blog/posts/top', {}).then(function(data){ console.log(data)
              vm.topPosts = data;
            }, function(){

            });
          }
        }


      })


})();
