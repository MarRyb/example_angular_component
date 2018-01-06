var MainPageController;

// список зависимостей, здесь ОБЯЗАТЕЛЬНО передаются в ковычках
var dependencies = ['$http'];

// Инициализация компонента,
// список зависимостей передаются в функцию, без ковычек
MainPageController = function($http) {
  
  var vm = this; // переменная, область видимости контроллера (стандартная запись)

  // БИЗНЕС-ЛОГИКА
  vm.sounds = [];
  $http({
    method: 'GET',
    url: 'http://localhost:8080/server/sounds.json',
    params: {}
  }).then(function(response){
    vm.sounds = response.data.sounds;
  });
}

angular.module('app').controller('MainPageController', dependencies.concat(MainPageController));