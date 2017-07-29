module.exports = angular
  .module('articles.component', [
    ])
  .component('articlesComponent', {
    templateUrl: './app/js/articles/components/articles.template.html',
    controller: ArticlesController
  });


function ArticlesController() {
  var ctrl = this;
  ctrl.items = JSON.parse(localStorage.getItem("items")) || [];

  ctrl.createItem = function(value) {
    if(value.item != "" && value.item != undefined) {
      ctrl.item = {name: value.item, comments: {}};
      ctrl.items.push(ctrl.item);
      localStorage.setItem("items", angular.toJson(ctrl.items));
      value.item = "";
    }
  }

  ctrl.quantityOfArticles = 0;

  ctrl.deleteItem = function(index) {
    ctrl.items.splice(index, 1)
    localStorage.setItem("items", angular.toJson(ctrl.items));
  }

  ctrl.selectItem = function(index, event, current) {
    console.log(index)
    console.log(event)
    console.log(current)

    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   event.target.className = "active";
  }
};
