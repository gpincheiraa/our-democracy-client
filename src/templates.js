angular.module('OurDemocracyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/views/detalle/detalle.html',
    '\n' +
    '<div class="profile"><img src="{{detalleCtrl.infoCandidato.foto}}">\n' +
    '  <h1>{{detalleCtrl.infoCandidato.nombre}}</h1>\n' +
    '  <h5>{{detalleCtrl.infoCandidato.partido}}</h5>\n' +
    '  <div class="val">\n' +
    '    <div class="icon"><img src="./assets/images/happy.png" class="icon-happy icon-xl"></div>\n' +
    '    <div class="icon"><img src="./assets/images/neutro.png" class="icon-noun icon-xl"></div>\n' +
    '    <div class="icon"><img src="./assets/images/angry.png" class="icon-angry icon-xl"></div>\n' +
    '  </div>\n' +
    '  <div class="votes">\n' +
    '    <div class="vote happy icon-xl"><span>10%</span></div><span class="hr"></span>\n' +
    '    <div class="vote noun icon-xl"><span>60%</span></div><span class="hr"></span>\n' +
    '    <div class="vote angry icon-xl"><span>30%</span></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="tweets">\n' +
    '  <blockquote data-lang="es" class="twitter-tweet">\n' +
    '    <p lang="es" dir="ltr">¡Qué alegría el premio Nobel de Literatura para Bob Dylan! Muchos y gratos recuerdos de mi adolescencia están asociados a su música. — Michelle Bachelet (@mbachelet) </p><a href="https://twitter.com/mbachelet/status/786534079848124416">13 de octubre de 2016</a>\n' +
    '  </blockquote>\n' +
    '  <script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>\n' +
    '</div>'
  );


  $templateCache.put('assets/views/home/home.html',
    '\n' +
    '<div id="content">\n' +
    '  <div id="list_pol">\n' +
    '    <div ng-repeat="candidato in homeCtrl.listaCandidatos track by candidato.id" ng-click="homeCtrl.cargarDetalle(candidato.id)" class="pol">\n' +
    '      <div class="ava"><img ng-src="{{::candidato.foto}}" class="avatar"><span class="flag"></span></div>\n' +
    '      <div class="desc">\n' +
    '        <p class="nom">{{::candidato.nombre}}</p>\n' +
    '        <p class="part">{{::candidato.partido}}</p>\n' +
    '      </div>\n' +
    '      <div class="val">\n' +
    '        <div class="icon"><img src="./assets/images/happy.png" class="icon-happy icon-xs"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/neutro.png" class="icon-noun icon-m"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/angry.png" class="icon-angry icon-xl"></div>\n' +
    '      </div>\n' +
    '      <div class="votes">\n' +
    '        <div class="vote happy"><span>10%</span></div><span class="hr"></span>\n' +
    '        <div class="vote noun"><span>60%</span></div><span class="hr"></span>\n' +
    '        <div class="vote angry"><span>30%</span></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>'
  );


  $templateCache.put('assets/views/main/main.html',
    '\n' +
    '<div id="header">\n' +
    '  <div class="bg"><img src="./assets/images/twitter.png" class="logo">\n' +
    '    <h1>Nuestra democracia</h1>\n' +
    '    <h3>Conoce cómo reacciona la gente ante los tweets de los políticos. </h3>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div ng-show="false" class="loading">\n' +
    '  <div class="pong-spinner"><i></i></div>\n' +
    '</div>\n' +
    '<div ui-view="content"></div>'
  );

}]);
