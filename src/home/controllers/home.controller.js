(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('HomeController',Controller);

  Controller.$inject = ['$state', 'listaCandidatosResponse'];

  function Controller($state, listaCandidatosResponse){
  	
  	var vm = this;

  	vm.listaCandidatos = listaCandidatosResponse;

  	vm.cargarDetalle = cargarDetalle;

  	function cargarDetalle(idCandidato){

  		$state.go('app.detalle',{id: idCandidato});

  	}
  }

})();