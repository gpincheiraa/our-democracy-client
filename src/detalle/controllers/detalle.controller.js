(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('DetalleController',Controller);

  Controller.$inject = ['$rootScope','$stateParams', 'infoCandidatoResponse'];

  function Controller($rootScope, $stateParams, infoCandidatoResponse){
  	
  	var vm = this;

  	vm.infoCandidato = infoCandidatoResponse;

    //$('.loading').addClass('hide');

    $rootScope.$broadcast('loading:false');
  }

})();