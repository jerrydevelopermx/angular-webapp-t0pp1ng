(function(){
    'use strict';
    angular.module('webApp')

    .component('appPost', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/post.html',
        controller: function($scope, $anchorScroll, $location, $stateParams, Requester) {
          var vm = this;
          vm.post;
          vm.relatedPosts;
          vm.topPosts;
          var monthsES = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

          vm.$onInit = function(){
            anchorScroll();
            getData();
            getTopPosts();
          }

          function dateFormat(date){
            var splitted = date.split('-');
            return splitted[2] + '/' + monthsES[Number(splitted[1])-1] + '/' + splitted[0];
          }

          function getData(){
            Requester.get('blog/post/' + $stateParams.post_id, {}).then(function(data){
              getRelatedPosts(data[0].category_id);
              vm.post = data;
              vm.fDate = dateFormat(data[0].date);
            }, function(){

            });
          }

          function getRelatedPosts(category_id){
            Requester.get('blog/posts/' + category_id, {}).then(function(data){
              vm.relatedPosts = data;
            }, function(){

            });
          }

          function getTopPosts(){
            Requester.get('blog/posts/top', {}).then(function(data){
              vm.topPosts = data;
            }, function(){

            });
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
