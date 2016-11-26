module.exports.config = {
  /*seleniumAddress: 'http://localhost:58449/wd/hub',*/

  specs: [
    'test/e2e/features/*.feature'
  ],
  
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['test/e2e/features/support/*.js', 'test/e2e/features/step_definitions/*_steps.js'],
    format: 'pretty'
  },
  

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.get(process.env.BASE_URL);
  }

};