(function() {
  'use strict';
  
  describe('Detalle Service', DetalleSpec);

  function DetalleSpec(){

    var DetalleService,
        httpBackend,
        responseMock = { data: {positive: 10, negative: 60, neutral: 30, total: 15 }};

    beforeEach(module('OurDemocracyApp'));

    beforeEach(inject(eachSpec));

    function eachSpec($httpBackend, _DetalleService_, APP_SETTINGS){
      
      var postCandidatoUrlRegex = new RegExp(APP_SETTINGS.BASE_URL + '/search/.+\\?analize=true');

      DetalleService = _DetalleService_;
      httpBackend  = $httpBackend;

      httpBackend
        .whenGET(postCandidatoUrlRegex)
        .respond(200, responseMock);
    }

    it('1. Debería estar definido', spec1);

    function spec1(){
      expect(DetalleService).toBeDefined();
    }

    it('2. Debería devolver los resultados a través de método getInfoCandidato', spec2);

    function spec2(){

      var searchedId = 1,
          expectedResponse = { nombre: 'Michelle Bachelet', foto: './assets/images/bachelet.png', partido: 'Nueva Mayoría' ,positivos: 10, negativos: 60, neutrales: 30, total: 15 };

      DetalleService
        .getInfoCandidato(searchedId)
        .then(function(res){
          expect(res).toEqual(expectedResponse);
        });

      httpBackend.flush();
    }

    it('3. Debería devolver la lista de candidatos con el método getCandidatos', spec3);

    function spec3(){
      var listaCandidatos = DetalleService.getCandidatos();

      expect(_.isArray(listaCandidatos)).toBe(true);
    }

    

  }

})();