// Инициализация компонента
// 
// Список параметров:
// templateUrl - путь к шаблону
// controller  - привязка к контроллеру, НазваниеКонтроллера as названиеКонтроллера
// bindings    - переменные, которые передаются в компонент, 
// 				 			 = - двусторонняя связь
// 				 			 < - односторонняя связь

angular.module('app').component("mainPage", {
  templateUrl: './js/modules/main-page/template.html',
  controller: 'MainPageController as mainPageCtrl'
});