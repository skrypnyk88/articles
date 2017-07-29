module.exports = angular
  .module('main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/articles');
    $stateProvider.state('main', {
      name: 'main',
      template: '<main-component></main-component>'
    });
  });
