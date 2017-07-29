var mainComponent = require('./components/main.component.js');
var mainRoute = require('./main.route.js');
var articlesModule = require('./../articles/articles.module.js');
require('../../css/style.scss');

module.exports = angular
  .module('main', [
    mainComponent.name,
    mainRoute.name,
    articlesModule.name
  ]);
