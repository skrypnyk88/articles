module.exports = angular
  .module('articles.component', [
    ])
  .component('articlesComponent', {
    templateUrl: './app/js/articles/components/articles.template.html',
    controller: ArticlesController
  });

ArticlesController.$inject = [];


function ArticlesController() {
  var ctrl = this;
  ctrl.items = JSON.parse(localStorage.getItem("items")) || [];
  ctrl.index = undefined;
  ctrl.comments = [];
  ctrl.commentField = document.querySelector("#commentField");
  ctrl.color = document.querySelector("#colorPiker");
  ctrl.hide = true;

  ctrl.createItem = function(value) {
    if(value.item != "" && value.item != undefined) {
      ctrl.item = {name: value.item, comments: []};
      ctrl.items.push(ctrl.item);
      localStorage.setItem("items", angular.toJson(ctrl.items));
      value.item = "";
    }
  }

  ctrl.deleteItem = function(index) {
    ctrl.hide = true;
    ctrl.items.splice(index, 1)
    localStorage.setItem("items", angular.toJson(ctrl.items));
  }

  ctrl.selectItem = function(index, event) {
    ctrl.hide = false;
    ctrl.index = index;
    ctrl.comments = ctrl.items[index].comments;
    var elems = document.querySelector(".active");
    if(elems !== null){
     elems.classList.remove("active");
    }
   event.target.className = "active";
  }

  ctrl.commentField.addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
      ctrl.colorPiker = document.querySelector('#colorPiker');
      event.target.value = event.target.value.trim();

      if(event.target.value.length > 0) {
        ctrl.comment = {color: ctrl.color.value, coment: event.target.value}
        ctrl.items[ctrl.index].comments.push(ctrl.comment);
      }
      localStorage.setItem("items", angular.toJson(ctrl.items));
      event.target.value = "";

    }
  });
};
