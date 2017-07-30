module.exports = angular
  .module('main.route', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/articles');
    $stateProvider.state('main', {
      name: 'main',
      template: '<main-component></main-component>'
    });
  }]);
