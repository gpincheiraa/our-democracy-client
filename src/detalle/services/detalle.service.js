(function() {
  
  'use strict';
  
  angular
    .module('OurDemocracyApp')
    .service('DetalleService', Service);
  
  Service.$inject = ['$http','APP_SETTINGS'];
  
  function Service($http, APP_SETTINGS) {

    var listaCandidatos = [
      {id: 1, nombre: 'Michelle Bachelet', tag: 'michelle+bachelet', foto: './assets/images/bachelet.png', partido: 'Nueva Mayoría'},
      {id: 2, nombre: 'Sebastián Piñera', tag: 'sebastian+pinera', foto: './assets/images/pinera.png', partido: 'Chile Vamos'},
      {id: 3, nombre: 'Eduardo Frei', tag: 'eduardo+frei', foto: './assets/images/frei.png', partido: 'Chile Vamos'},
      {id: 4, nombre: 'Ricardo Lagos', tag: 'ricardo+lagos',foto: './assets/images/rlagos.png', partido: 'PPD'}
    ];

    this.getInfoCandidato = getInfoCandidato;
    this.getCandidatos = getCandidatos;

    function getCandidatos(){
      return listaCandidatos;
    }
    function compareCandidatos(_id, candidato){
      return parseInt(candidato.id,10) === parseInt(_id, 10);
    }
    function getNombreCandidato(_id){
      return listaCandidatos.filter(compareCandidatos.bind(this, _id))[0]
    }
    function getInfoCandidato(_id){
      
      var searched_candidato = getNombreCandidato(_id),
          request_params = {
            method: 'GET',
            url: APP_SETTINGS.BASE_URL + '/search/' + searched_candidato.tag + '?analize=true'
          };

      //return listaCandidatos.filter(compareCandidatos)[0];
      return $http(request_params)
              .then(function(response){
                
                return {
                  nombre: searched_candidato.nombre,
                  foto: searched_candidato.foto,
                  positivos: response.data.positive,
                  negativos: response.data.negative,
                  neutrales: response.data.neutral 
                };
              
              });
    }

  }
})();