// Инициализация компонента
// 
// Список параметров:
// templateUrl - путь к шаблону
// controller  - привязка к контроллеру, НазваниеКонтроллера as названиеКонтроллера
// bindings    - переменные, которые передаются в компонент, 
// 				 			 = - двусторонняя связь
// 				 			 < - односторонняя связь

angular.module('app').component("soundsItem", {
  templateUrl: './js/modules/sounds-item/template.html',
  controller: 'SoundsItemController as soundsItemCtrl',
  bindings: {
  	item: '<'
  }
});