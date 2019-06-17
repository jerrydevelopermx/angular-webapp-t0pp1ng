(function(){
    'use strict';
    angular.module('webApp')

    .component('appBlog', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/blog.html',
        controller: function($scope, $anchorScroll, $location, Requester) {
          var vm = this;

          vm.posts = {
            class: 'content-column',
            title: null,
            description: null,
            bottom :null
          };

          vm.$onInit = function(){
            anchorScroll();
            getData();
          }

          function getData(){
            Requester.get('blog/posts/', {}).then(function(data){
              vm.posts.rows = formatData(data);
            }, function(){

            });
          }

          function formatData(data){
            var rows = [];
            var col;
            var row = {columns: []};

            for(var index in data){
              col = {
                  title: '',
                  class: 'content-column-blog',
                  centered: false,
                  content: [{
                      elementType: 'card',
                      elementClass: 'post-card',
                      cardContentClass: 'perfil-card',
                      class: 'justified',
                      type:'post',
                      cover: data[index].cover,
                      topic: data[index].category,
                      description: data[index].title,
                      post_id: data[index].post_id
                  }]
              }
              row.columns.push(col);
              if(index%4 == 3){
                rows.push(row);
                row = {columns: []};
              }
            }
            return rows;
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