angular.module('testApp').component("mainHeader", {
  templateUrl: './js/modules/main-header/template.html',
  controller: 'MainHeaderController as mainHeaderCtrl',
  bindings: {
  	delay: '=',
  	numberOfItems: '=',
  	apply: '<'
  }
});