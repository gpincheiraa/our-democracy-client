(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('DetalleController',Controller);

  Controller.$inject = ['$rootScope','$stateParams', 'infoCandidatoResponse','$state'];

  function Controller($rootScope, $stateParams, infoCandidatoResponse,$state){
  	
  	var vm = this;

  	vm.infoCandidato = infoCandidatoResponse;

    vm.volverHome = volverHome;

    //$('.loading').addClass('hide');

    function volverHome(){

      $state.go('app.home');

    }

    $rootScope.$broadcast('loading:false');
  }

})();