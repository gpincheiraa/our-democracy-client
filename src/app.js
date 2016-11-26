(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp', [
  	  //Oficial angular modules
      'ngAnimate',
      //Third party angular modules
      'ui.router',
  	]);

  	angular
      .module('OurDemocracyApp')
      .constant('APP_SETTINGS', {
        //BASE_URL: 'http://localhost:3000/api'
        // NAVBAR_SETTINGS: {
        //   templateUrl: 'assets/views/navbar/navbar.html',
        //   controller: 'NavbarController',
        //   controllerAs: 'navbar'
        // }
        
      });

    angular
      .module('OurDemocracyApp')
      .config(configFn);

    configFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_SETTINGS']

    function configFn($stateProvider, $urlRouterProvider, APP_SETTINGS){

      //Routes
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'assets/views/main/main.html'
        })
          .state('app.home', {
            url:'/home',
            views: {
              //'navbar' : APP_SETTINGS.NAVBAR_SETTINGS,
              'content' : {
                templateUrl: 'assets/views/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
              }
            }
          })
          .state('app.detalle', {
            url:'/detalle/:id',
            views: {
              //'navbar' : APP_SETTINGS.NAVBAR_SETTINGS,
              'content' : {
                templateUrl: 'assets/views/detalle/detalle.html',
                controller: 'DetalleController',
                controllerAs: 'detalleCtrl'
              }
            }
          })
    }

})();