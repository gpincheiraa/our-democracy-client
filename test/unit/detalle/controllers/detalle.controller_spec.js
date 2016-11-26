//detalle.controller_spec.js

(function() {
  'use strict';
  
  describe('Detalle Controller', detalleControllerSpec);

  function detalleControllerSpec(){
  	var DetalleController,
        stateService;

  	beforeEach(module('OurDemocracyApp'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller,$state){
      
      DetalleController = $controller('DetalleController');
      stateService = $state;

    }

    it('1. Debería estar definido', spec1);

    function spec1(){
      expect(DetalleController).toBeDefined();
    }

  }

 })();