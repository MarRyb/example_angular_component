angular.module('testApp').component("itemFirst", {
  templateUrl: './js/modules/item-first/template.html',
  controller: 'ItemFirstController as itemFirstCtrl',
  bindings: {
  	item: '<',
  	selectObject: '<',
  	selectedItem: '<'
  }
});