module.exports = function() {

  const jestTransform = file => require('jest-preset-angular/preprocessor')
  .process(file.content, file.path, {globals: {__TRANSFORM_HTML__: true}, rootDir: __dirname});

  return {
    files: [
      'jest.app.base.js',
      'jest.base.config.js',
      'jest.lib.config.js',
      'projects/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!projects/**/*.spec.ts'
    ],
    tests: ['projects/**/*.spec.ts'],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    compilers: {
      '**/*.html': file => ({code: jestTransform(file), map: {version: 3, sources: [], names: [], mappings: []}, ranges: []})
    },
    preprocessors: {
      'src/**/*.js': jestTransform,
    },
    setup: function(wallaby) {
      var jestConfig = require('./jest.lib.config.js');
      // jestConfig.setupFilesAfterEnv = ['<rootDir>/setupJest.js'];
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
