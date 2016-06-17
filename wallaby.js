/* eslint-disable */

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.NODE_PATH='.:./src';

module.exports = function Wallaby(wallaby) {
  return {
    files: [
      'src/**/*.js',
      { pattern: 'src/**/test/*.js', ignore: true },
    ],
    tests: [
      '/src/**/test/*.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    env: {
      type: 'node',
      runner: 'node',

      params: {
        runner: '--harmony_destructuring',
      }
    },
    testFramework: 'mocha',
    setup: function () {
      require('./src/init.test');
    },
  };
};
