var TodosPanelController;

var dependencies = ['$http'];

TodosPanelController = function($http) {
  var vm = this; 
  vm.filter = "all";
  vm.todos = [];
  $http({
  	method: 'GET',
  	url: 'http://192.168.0.102:3000/api/v1/items.json',
  	params: {}
  }).then(function(response){
  	console.log(response);
  	vm.todos = response.data.items;
  })
}

angular.module('app').controller('TodosPanelController', dependencies.concat(TodosPanelController));