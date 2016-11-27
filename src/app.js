(function() {
  'use strict';

  angular
  	.module('OurDemocracyApp', [
  	  //Oficial angular modules
      'ngAnimate',
      //Third party angular modules
      'ui.router'
  	]);

  	angular
      .module('OurDemocracyApp')
      .constant('APP_SETTINGS', {
        BASE_URL: 'http://ourdemocracy.cloudapp.net:3000/api',
      });

    angular
      .module('OurDemocracyApp')
      .config(configFn);

    configFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_SETTINGS'];

    function configFn($stateProvider, $urlRouterProvider, APP_SETTINGS){

      //Routes
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'assets/views/main/main.html',
          controllerAs: 'mainCtrl',
          controller: ['$scope',function($scope){

            var vm = this;

            vm.loading = false;

            $scope.$on('loading:true', function(){vm.loading = true});
            $scope.$on('loading:false', function(){vm.loading = false});

          }]
        })
          .state('app.home', {
            url:'/home',
            views: {
              'content' : {
                templateUrl: 'assets/views/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                resolve: {
                  listaCandidatosResponse : ['DetalleService' ,function(DetalleService){
                    return DetalleService.getCandidatos();
                  }]
                }
              }
            }
          })
          .state('app.detalle', {
            url:'/detalle/:id',
            views: {
              'content' : {
                templateUrl: 'assets/views/detalle/detalle.html',
                controller: 'DetalleController',
                controllerAs: 'detalleCtrl',
                resolve: {
                  infoCandidatoResponse: ['DetalleService','$stateParams', function(DetalleService, $stateParams){
                    return DetalleService.getInfoCandidato($stateParams.id);
                  }]
                }
              }
            }
          })
    }

    // angular
    //   .module('OurDemocracyApp')
    //   .run(runFn);

    // runFn.$inject = ['$rootScope'];

    // function runFn($rootScope){
    //   $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, error) {
    //     e.preventDefault();
    //   });
    // }

})();