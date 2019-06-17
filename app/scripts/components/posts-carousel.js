(function(){
    'use strict';
    angular.module('webApp')

    .component('postsCarousel', {
        bindings: {
          posts: '=',
        },
        templateUrl: 'views/posts-carousel.html',
        controller: function(Requester){
          var vm = this;
          vm.$onInit = function(){
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
          }

        }


      })


})();
