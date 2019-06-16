(function(){
    'use strict';
    angular.module('webApp')

    .component('appPost', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/post.html',
        controller: function($scope, $anchorScroll, $location) {
          var vm = this;

          vm.$onInit = function(){
            anchorScroll();

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
