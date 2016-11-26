angular.module('OurDemocracyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/views/detalle/detalle.html',
    '\n' +
    '<h1>detalle de {{detalleCtrl.idCandidato}}</h1>'
  );


  $templateCache.put('assets/views/home/home.html',
    '\n' +
    '<ul>\n' +
    '  <li ng-repeat="candidato in homeCtrl.listaCandidatos track by candidato.id"><a ng-click="homeCtrl.cargarDetalle(candidato.id)">{{candidato.nombre}}</a></li>\n' +
    '</ul>'
  );


  $templateCache.put('assets/views/main/main.html',
    '\n' +
    '<div ui-view="navbar"></div>\n' +
    '<div ui-view="content"></div>'
  );

}]);
