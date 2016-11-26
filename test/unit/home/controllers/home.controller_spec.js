(function() {
  'use strict';
  
  describe('Home Controller', homeControllerSpec);

  function homeControllerSpec(){
  	var HomeController,
        stateService;

  	beforeEach(module('OurDemocracyApp', provideToSpec));

    function provideToSpec($provide){
      $provide.value('listaCandidatosResponse', [
        {id:1,nombre: 'Ricardo Lagos'},
        {id:2,nombre: 'Alejandro Guiller'}
      ]);
    }

    beforeEach(inject(eachSpec));

    function eachSpec($controller,$state){
      HomeController = $controller('HomeController');
      stateService = $state;
    }

    it('1. Debería estar definido', spec1);

    function spec1(){
      expect(HomeController).toBeDefined();
    }

    it('2. Debería existir una lista con los candidatos', spec2);
    
    function spec2(){
      expect(_.isArray(HomeController.listaCandidatos)).toBe(true);
    }

    it('3. Debería redirigir al detalle al hacer clic en un elemento de la lista',spec3);

    function spec3(){
      
      var idCandidato = 1;

      spyOn(stateService,'go');
      HomeController.cargarDetalle(idCandidato);

      expect(stateService.go).toHaveBeenCalledWith('app.detalle', {id: idCandidato});
    }

  }

 })();