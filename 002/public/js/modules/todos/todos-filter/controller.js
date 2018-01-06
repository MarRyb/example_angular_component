var TodosFilterController;

var dependencies = [];

TodosFilterController = function() {
  var vm = this;

  vm.changeFilter = function(filter) {
  	vm.filter = filter;
  }
}

angular.module('app').controller('TodosFilterController', dependencies.concat(TodosFilterController));