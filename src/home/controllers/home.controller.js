(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('HomeController',Controller);

  Controller.$inject = ['$state'];

  function Controller($state){
  	
  	var vm = this;

  	vm.listaCandidatos = [
  		{id:1,nombre:'German'},
  		{id:2,nombre: 'Gonzalo'}
  	];

  	vm.cargarDetalle = cargarDetalle;

  	function cargarDetalle(idCandidato){

  		$state.go('app.detalle',{id: idCandidato});

  	}
  }

})();