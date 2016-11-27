(function() {
  
  'use strict';
  
  angular
    .module('OurDemocracyApp')
    .service('DetalleService', Service);
  
  Service.$inject = ['$http','APP_SETTINGS'];
  
  function Service($http, APP_SETTINGS) {

    var listaCandidatos = [
      {id: 1, nombre: 'Michael Bachelet', foto: './assets/images/bachelet.png', partido: 'Nueva Mayoría'},
      {id: 2, nombre: 'Sebastián Piñera', foto: './assets/images/pinera.png', partido: 'Chile Vamos'},
      {id: 3, nombre: 'Eduardo Frei', foto: './assets/images/frei.png', partido: 'Chile Vamos'},
      {id: 4, nombre: 'Ricardo Lagos', foto: './assets/images/rlagos.png', partido: 'PPD'}
    ];

    this.getInfoCandidato = getInfoCandidato;
    this.getCandidatos = getCandidatos;

    function getCandidatos(){
      return listaCandidatos;
    }
    function compareCandidatos(candidato){
      return parseInt(candidato.id,10) === parseInt(_id, 10);
    }

    function getNombreCandidato(_id){
      
      var searchedCandidato = listaCandidatos.filter(compareCandidatos)[0];

      return searchedCandidato.nombre;
    }

    function getInfoCandidato(_id){
      
      var request_params = {
            method: 'GET',
            url: APP_SETTINGS.BASE_URL + '/monkey/' + getNombreCandidato(_id)
          };

      return listaCandidatos.filter(compareCandidatos)[0];
      // return $http(request_params)
      //         .then(function(response){
      //           return response.data;
      //         });
    }

  }
})();