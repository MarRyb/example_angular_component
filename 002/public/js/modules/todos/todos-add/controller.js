var TodosAddController;

var dependencies = ['$http'];

TodosAddController = function($http) {
  var vm = this;
  vm.title = '';
  vm.createTodo = function(keyEvent){
  	if (keyEvent.which === 13) {
  		if (vm.title == '') {
  			alert('ВВЕДИ ШОТО, ТУПИЦА! :D');
  		}else {
			 	$http({
			  	method: 'POST',
			  	url: 'http://192.168.0.102:3000/api/v1/items.json',
			  	data: {
			  		item: {
			  			title: vm.title
			  		}
			  	}
			  }).then(function(response){
			  	console.log(response);
			  	vm.title = '';
			  	vm.todos = vm.todos.concat(response.data.item);
			  }, function(response){
			  	alert(response.data.error);
			  });
  		}
  	}
  }
}

angular.module('app').controller('TodosAddController', dependencies.concat(TodosAddController));