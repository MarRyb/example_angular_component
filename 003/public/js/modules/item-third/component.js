angular.module('testApp').component("itemThird", {
  templateUrl: './js/modules/item-third/template.html',
  controller: 'ItemThirdController as itemThirdCtrl',
  bindings: {
  	item: '<',
  	selectObject: '<',
  	selectedItem: '<'
  }
});