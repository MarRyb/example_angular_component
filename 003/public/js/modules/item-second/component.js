angular.module('testApp').component("itemSecond", {
  templateUrl: './js/modules/item-second/template.html',
  controller: 'ItemSecondController as itemSecondCtrl',
  bindings: {
  	item: '<',
  	selectObject: '<',
  	selectedItem: '<'
  }
});