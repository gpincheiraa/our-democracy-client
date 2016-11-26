angular.module('OurDemocracyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/views/home/home.html',
    '\n' +
    '<div id="header">\n' +
    '  <div class="bg"><img src="./assets/images/twitter.png" class="logo">\n' +
    '    <h1>Nuestra democracia</h1>\n' +
    '    <h3>Conoce cómo reacciona la gente ante los tweets de los políticos. </h3>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div id="content">\n' +
    '  <div class="tweets">\n' +
    '    <div class="tweet"><img src="./assets/images/tweet1.png" class="tweet-1"></div>\n' +
    '    <div class="tweet"><img src="./assets/images/tweet2.png" class="tweet-2"></div>\n' +
    '  </div>\n' +
    '  <div id="list_pol">\n' +
    '    <div class="pol pol-active">\n' +
    '      <div class="ava"><img src="./assets/images/bachelet.png" class="avatar"><span class="flag"></span></div>\n' +
    '      <div class="desc">\n' +
    '        <p class="nom">Michael Bachelet</p>\n' +
    '        <p class="part">Izquierda</p>\n' +
    '      </div>\n' +
    '      <div class="val">\n' +
    '        <div class="icon"><img src="./assets/images/happy.png" class="icon-happy icon-xs"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/angry.png" class="icon-angry icon-xl"></div>\n' +
    '      </div>\n' +
    '      <div class="votes">\n' +
    '        <div class="vote happy"><span>10%</span></div><span class="hr"></span>\n' +
    '        <div class="vote angry"><span>90%</span></div>\n' +
    '      </div>\n' +
    '      <div class="details">\n' +
    '        <div class="item">\n' +
    '          <blockquote data-lang="es" class="twitter-tweet">\n' +
    '            <p lang="es" dir="ltr"><a href="https://twitter.com/SolucionadoCL">@SolucionadoCL que no lleguen tus vacaciones sin tu licencia en mano, llámanos</a><a href="https://t.co/pDXqutCjg7">https://t.co/pDXqutCjg7 — maneja santiago (@maneja_santiago) </a><a href="https://twitter.com/maneja_santiago/status/801533155467546624">23 de noviembre de 2016</a></p>\n' +
    '            <script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>\n' +
    '          </blockquote>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="pol">\n' +
    '      <div class="ava"><img src="./assets/images/pinera.png" class="avatar"><span class="flag"></span></div>\n' +
    '      <div class="desc">\n' +
    '        <p class="nom">Sebastián Piñera</p>\n' +
    '        <p class="part">Derecha</p>\n' +
    '      </div>\n' +
    '      <div class="val">\n' +
    '        <div class="icon"><img src="./assets/images/happy.png" style="width:\'20px\'" class="icon-happy"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/angry.png" class="icon-angry"></div>\n' +
    '      </div>\n' +
    '      <div class="votes">\n' +
    '        <div class="vote happy"><span>10%</span></div><span class="hr"></span>\n' +
    '        <div class="vote angry"><span>90%</span></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="pol">\n' +
    '      <div class="ava"><img src="./assets/images/frei.png" class="avatar"><span class="flag"></span></div>\n' +
    '      <div class="desc">\n' +
    '        <p class="nom">Eduardo Frei</p>\n' +
    '        <p class="part">Izquierda</p>\n' +
    '      </div>\n' +
    '      <div class="val">\n' +
    '        <div class="icon"><img src="./assets/images/happy.png" style="width:\'20px\'" class="icon-happy"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/angry.png" class="icon-angry"></div>\n' +
    '      </div>\n' +
    '      <div class="votes">\n' +
    '        <div class="vote happy"><span>10%</span></div><span class="hr"></span>\n' +
    '        <div class="vote angry"><span>90%</span></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="pol">\n' +
    '      <div class="ava"><img src="./assets/images/rlagos.png" class="avatar"><span class="flag"></span></div>\n' +
    '      <div class="desc">\n' +
    '        <p class="nom">Ricardo Lagos</p>\n' +
    '        <p class="part">Izquierda</p>\n' +
    '      </div>\n' +
    '      <div class="val">\n' +
    '        <div class="icon"><img src="./assets/images/happy.png" style="width:\'20px\'" class="icon-happy"></div><span class="hr"></span>\n' +
    '        <div class="icon"><img src="./assets/images/angry.png" class="icon-angry"></div>\n' +
    '      </div>\n' +
    '      <div class="votes">\n' +
    '        <div class="vote happy"><span>10%</span></div><span class="hr"></span>\n' +
    '        <div class="vote angry"><span>90%</span></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>'
  );


  $templateCache.put('assets/views/main/main.html',
    '\n' +
    '<div ui-view="navbar"></div>\n' +
    '<div ui-view="content"></div>'
  );

}]);
