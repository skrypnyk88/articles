var articlesComponent = require('./components/articles.component.js');
var articlesRoute = require('./articles.route.js');

module.exports = angular
  .module('articles', [
    articlesComponent.name,
    articlesRoute.name
  ]);
