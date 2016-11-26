(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('HomeController',Controller);

  function Controller(){
  	
  	var vm = this;

  	vm.listaCandidatos = [];
  }

})();