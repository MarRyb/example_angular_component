angular.module('app').component("todosList", {
  templateUrl: './js/modules/todos/todos-list/template.html',
  controller: 'TodosListController as todosListCtrl',
  bindings: {
  	todos: '<',
  	filter: '<'
  }
});