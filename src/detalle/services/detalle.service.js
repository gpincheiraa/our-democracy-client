(function() {
  
  'use strict';
  
  angular
    .module('OurDemocracyApp')
    .service('DetalleService', Service);
  
  Service.$inject = ['$http','APP_SETTINGS'];
  
  function Service($http, APP_SETTINGS) {

    var listaCandidatos = [
      {id: 1, nombre: 'Michelle Bachelet', tag: 'michelle bachelet', foto: './assets/images/bachelet.png', partido: 'Nueva Mayoría'},
      {id: 2, nombre: 'Alejandro Guiller', tag: 'alejandro guiller', foto: './assets/images/guiller.png', partido: 'Indepediente'},
      {id: 3, nombre: 'Isabel Allende', tag: 'isabel allende', foto: './assets/images/allende.png', partido: 'PPD'},
      {id: 4, nombre: 'Ricardo Lagos', tag: 'ricardo lagos',foto: './assets/images/rlagos.png', partido: 'PPD'}
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
            url: APP_SETTINGS.BASE_URL + '/search/' + searched_candidato.tag + '?analize=true&type=recent&count=100'
          };

      //return listaCandidatos.filter(compareCandidatos)[0];
      return $http(request_params)
              .then(function(response){
                
                var monkey_learn_data = response.data['data'];

                return {
                  nombre: searched_candidato.nombre,
                  foto: searched_candidato.foto,
                  partido: searched_candidato.partido,
                  total: monkey_learn_data.total,
                  positivos: monkey_learn_data.positive,
                  negativos: monkey_learn_data.negative,
                  neutrales: monkey_learn_data.neutral 
                };
              
              });
    }

  }
})();