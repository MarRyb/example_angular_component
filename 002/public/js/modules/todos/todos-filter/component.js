angular.module('app').component("todosFilter", {
  templateUrl: './js/modules/todos/todos-filter/template.html',
  controller: 'TodosFilterController as todosFilterCtrl',
  bindings: {
  	filter: '='
  }
});