// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/ng-unit-test'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml','sonarqube','coverage'],
  	sonarqubeReporter: {
      basePath: 'src/app',
      outputFolder: 'coverage/ng-unit-test',
      filePattern: '**/*spec.ts',
      encoding: 'utf-8',
      legacyMode: false,
      reportName: (metadata) => {
        return 'unit-test-report.xml';
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
