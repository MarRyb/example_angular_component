angular.module('app').component("todosAdd", {
  templateUrl: './js/modules/todos/todos-add/template.html',
  controller: 'TodosAddController as todosAddCtrl',
  bindings: {
  	todos: "="
  }
});