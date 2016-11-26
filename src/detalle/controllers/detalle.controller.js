//detalle.controller.js

(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('DetalleController',Controller);

  Controller.$inject = ['$stateParams', 'infoCandidatoResponse'];

  function Controller($stateParams, infoCandidatoResponse){
  	
  	var vm = this;

  	vm.infoCandidato = infoCandidatoResponse;
  }

})();