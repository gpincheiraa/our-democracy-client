//detalle.controller_spec.js

(function() {
  'use strict';
  
  describe('Detalle Controller', detalleControllerSpec);

  function detalleControllerSpec(){
  	var DetalleController,
        stateService;

  	beforeEach(module('OurDemocracyApp', provideToSpec));

    function provideToSpec($provide){
      $provide.value('infoCandidatoResponse', {
          nombre: 'piraña',
          positivos: 10,
          neutrales: 30,
          negativos: 60
        });
    }

    beforeEach(inject(eachSpec));

    function eachSpec($controller,$state){
      
      DetalleController = $controller('DetalleController');
      stateService = $state;

    }

    it('1. Debería estar definido', spec1);

    function spec1(){
      expect(DetalleController).toBeDefined();
    }

    it('2.  Debería redirigir al detalle al hacer clic en la foto del candidato', spec2);

    function spec2(){

      spyOn(stateService,'go');
      DetalleController.volverHome();

      expect(stateService.go).toHaveBeenCalledWith('app.home');
    }

  }

 })();