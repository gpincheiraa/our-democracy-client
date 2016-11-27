(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('HomeController',Controller);

  Controller.$inject = ['$rootScope','$state', 'listaCandidatosResponse'];

  function Controller($rootScope, $state, listaCandidatosResponse){
  	
  	var vm = this;

  	vm.listaCandidatos = listaCandidatosResponse;

  	vm.cargarDetalle = cargarDetalle;

  	function cargarDetalle(idCandidato){

      $rootScope.$broadcast('loading:true');
  		$state.go('app.detalle',{id: idCandidato});

  	}
  }

})();