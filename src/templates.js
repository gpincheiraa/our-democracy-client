angular.module('OurDemocracyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/views/home/home.html',
    ""
  );


  $templateCache.put('assets/views/main/main.html',
    '\n' +
    '<div ui-view="navbar"></div>\n' +
    '<div ui-view="content"></div>'
  );

}]);
