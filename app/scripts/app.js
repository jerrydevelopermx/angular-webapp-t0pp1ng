'use strict';
/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # Daen Webapp
 *
 * Main module of the application.
 */
angular
  .module('webApp',[
      'ui.router',
      'ngRoute',
      'ngMaterial',
      'ngMessages',
      'nemLogging',
      'ngSanitize',
      'slickCarousel',
      'vcRecaptcha',
      'angular-google-analytics'
  ])


.constant('APP',{
  'api_url' : 'http://toppingcreativo.com.mx/topping-api/index.php/'//'http://localhost/topping-api/index.php/'
})


.config(function (AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-151362070-1');
        // track all routes/states (or not)
        AnalyticsProvider.trackPages(true);
        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);
        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');


})

.run(function($rootScope, $location, $window, $transitions, Analytics) {
  $transitions.onSuccess({}, function($transition){
        var url = $transition.$to().self.url;
        var params = $transition.params();
        if(params.post_id !== undefined){
          var urlSplit = url.split("/");
          urlSplit[urlSplit.length-1] = params.post_id;
          url = urlSplit.join('/');
        }
        Analytics.trackPage(url);
    });

})
/*
  .run(function($rootScope) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {

        $rootScope.$broadcast('urlchanged', {h:1});
    })
  })*/
  /*
  .config(['$httpProvider', ($httpProvider) => {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    $httpProvider.interceptors.push( logTimeTaken );
  }]);
  */
