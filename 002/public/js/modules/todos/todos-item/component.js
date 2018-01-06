angular.module('app').component("todosItem", {
  templateUrl: './js/modules/todos/todos-item/template.html',
  controller: 'TodosItemController as todosItemCtrl',
  bindings: {
  	item: '<',
  	filter: '<'
  }
});