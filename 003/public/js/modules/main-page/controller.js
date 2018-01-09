var MainPageController;

var dependencies = ['$timeout'];

MainPageController = function($timeout) {
  var vm = this;
  vm.data = [
        {
            name: "Test 1",
            description: "Description 1"
        },
        {
            name: "Test 2",
            description: "Description 2"
        },
        {
            name: "Test 3",
            description: "Description 3"
        }
    ]
    vm.selectedItem = null;
    vm.selectObject = function(item){
        vm.selectedItem = item;
    }
    vm.delay = 2000;
    vm.numberOfItems = 5;
    vm.apply = function(){
        $timeout(function(){
            alert(vm.numberOfItems);
        }, vm.delay)
    }
}

angular.module('testApp').controller('MainPageController', dependencies.concat(MainPageController));