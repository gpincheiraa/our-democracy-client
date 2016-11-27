(function() {
  
  'use strict';

  angular
  	.module('OurDemocracyApp')
  	.controller('MainController', Controller);

  Controller.$inject = ['$scope'];

  function Controller($scope){

    var vm = this;

    vm.loading = false;

    $scope.$on('loading:true', function(e, nombreCandidato){
      vm.loading = true
      vm.nombreCandidato = nombreCandidato;
    });
    
    $scope.$on('loading:false', function(){
      vm.loading = false
    });

  }

})();