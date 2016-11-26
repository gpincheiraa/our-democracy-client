'use strict';

var fs = require('fs');
var path = require('path');

var myHooks = function () {
  
  this.Before(function(scenario, done) {
    
    console.log("***********************");
    console.log("******  BEFORE *************");
    console.log("***********************");
    done();
    
  });

  this.After(function(scenario, done) {
    console.log("***********************");
    console.log("******  AFTER *************");
    console.log("***********************");
    done();
  });


};

module.exports = myHooks;