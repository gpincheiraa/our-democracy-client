//detalle.controller.js

(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('DetalleController',Controller);

  Controller.$inject = ['$stateParams'];

  function Controller($stateParams){
  	
  	var vm = this;

  	vm.idCandidato = $stateParams.id;

  	vm.verCandidato = verCandidato;

  	function verCandidato(){

  		//url format /detalle/:id

  	}

  }

})();