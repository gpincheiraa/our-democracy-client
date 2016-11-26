(function() {
  'use strict';
  
  describe('App Specs', AppSpecs);

  function AppSpecs(){

    var DetalleService,
        stateService,
        httpBackend;

    beforeEach(module('OurDemocracyApp'));

    beforeEach(inject(eachSpec));

    function eachSpec($httpBackend, $state, _DetalleService_){
      DetalleService = _DetalleService_;
      stateService = $state;
      httpBackend = $httpBackend;
    }

    it('1. Debería resolver con la lista de candidatos en la ruta "app.home"', spec1);

    function spec1(){
      
      spyOn(DetalleService, 'getCandidatos');

      stateService.go('app.home');

      expect(DetalleService.getCandidatos).toHaveBeenCalled();
    }

    it('2. Debería resolver con la lista de candidatos en la ruta "app.detalle"', spec2);

    function spec2(){
      
      var idCandidato = '1';

      spyOn(DetalleService, 'getInfoCandidato');

      stateService.go('app.detalle', {id: idCandidato});

      expect(DetalleService.getInfoCandidato).toHaveBeenCalledWith(idCandidato);
    }


  }

})();