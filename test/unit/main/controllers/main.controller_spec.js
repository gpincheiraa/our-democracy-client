(function() {
  'use strict';
  
  describe('Main Controller', mainControllerSpec);

  function mainControllerSpec(){
  	var MainController,
        rootScope,
        scope;

  	beforeEach(module('OurDemocracyApp'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller, $rootScope){
      
      rootScope = $rootScope;
      scope = $rootScope.$new();

      MainController = $controller('MainController', {
        $scope: scope
      });
    }

    it('1. Debería estar definido', spec1);

    function spec1(){
      expect(MainController).toBeDefined();
    }

    it('2. Debería escuchar el evento "loading:true" y activar loading', spec2);
    
    function spec2(){

      expect(MainController.loading).toBe(false);

      rootScope.$broadcast('loading:true');
      rootScope.$apply();

      expect(MainController.loading).toBe(true);
    }


    it('3. Debería escuchar el evento "loading:true" y desactivar loading', spec3);
    
    function spec3(){

      MainController.loading = true;

      rootScope.$broadcast('loading:false');
      rootScope.$apply();

      expect(MainController.loading).toBe(false);
    }



  }

 })();