var TodosItemController;

var dependencies = ['$http'];

TodosItemController = function($http) {
  var vm = this; 
  vm.todoExecution = function(){
		$http({
			method: 'PUT',
			url: 'http://192.168.0.102:3000/api/v1/items/' + vm.item.id,
			data: {
				item: {
					is_done: vm.item.is_done
				}
			}
		}).then(function(response){
			console.log(response);
  	},function(response){
  		vm.item.is_done = !vm.item.is_done;
  		alert(response.data.error);
  	});
  }
}

angular.module('app').controller('TodosItemController', dependencies.concat(TodosItemController));