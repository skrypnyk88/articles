module.exports = angular
  .module('articles.route', [])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('main.articles', {
      url: '/articles',
      template: '<articles-component></articles-component>'
    });
  }]);

