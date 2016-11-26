(function() {
  
  'use strict';
  
  angular
    .module('OurDemocracyApp')
    .service('DetalleService', Service);
  
  Service.$inject = ['$http','APP_SETTINGS'];
  
  function Service($http, APP_SETTINGS) {

    var listaCandidatos = [
      {id:1,nombre: 'Ricardo Lagos'},
      {id:2,nombre: 'Alejandro Guiller'}
    ];

    this.getInfoCandidato = getInfoCandidato;
    this.getCandidatos = getCandidatos;

    function getCandidatos(){
      return listaCandidatos;
    }

    function getNombreCandidato(_id){
      
      var searchedCandidato = listaCandidatos
                                .filter(function(candidato){
                                  return candidato.id == _id;
                                })[0];

      return searchedCandidato.nombre;
    }

    function getInfoCandidato(_id){
      
      var request_params = {
            method: 'GET',
            url: APP_SETTINGS.BASE_URL + '/monkey/' + getNombreCandidato(_id)
          };

      return $http(request_params)
              .then(function(response){
                return response.data;
              });
    }

  }
})();