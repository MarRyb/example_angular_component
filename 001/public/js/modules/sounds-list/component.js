// Инициализация компонента
// 
// Список параметров:
// templateUrl - путь к шаблону
// controller  - привязка к контроллеру, НазваниеКонтроллера as названиеКонтроллера
// bindings    - переменные, которые передаются в компонент, 
// 				 			 = - двусторонняя связь
// 				 			 < - односторонняя связь

angular.module('app').component("soundsList", {
  templateUrl: './js/modules/sounds-list/template.html',
  controller: 'SoundsListController as soundsListCtrl',
  bindings: {
  	items: '<',
  	title: '<'
  }
});