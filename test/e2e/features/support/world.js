/*'use strict';

require('chromedriver');

var fs = require('fs'),
		webdriver = require('selenium-webdriver'),
		platform = process.env.PLATFORM || "CHROME",
		driver = buildChromeDriver();

function buildChromeDriver() {
  return new webdriver.Builder()
    .forBrowser('chrome')
    .build();
}


function getDriver() {
  return driver;
}

function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };
}

module.exports.World = World;
module.exports.getDriver = getDriver;*/