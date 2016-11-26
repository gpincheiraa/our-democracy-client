(function() {
  'use strict';
  
  describe('Home Controller', homeControllerSpec);

  function homeControllerSpec(){

  	var HomeController;

  	beforeEach(module('OurDemocracyApp'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      
      HomeController = $controller('HomeController');

    }

    it('1. Este controller debería estar definido', spec1);

    function spec1(){
      expect(HomeController).toBeDefined();
    }

    it('2. Debería existir una lista con los candidatos', spec2);
    function spec2(){
      expect(_.isArray(HomeController.listaCandidatos)).toBe(true);
    }


  }

 })();