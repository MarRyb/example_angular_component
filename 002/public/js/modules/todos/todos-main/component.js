angular.module('app').component("todosMain", {
  templateUrl: './js/modules/todos/todos-main/template.html',
  controller: 'TodosMainController as todosMainCtrl',
  bindings: {
  	title: "<"
  }
});