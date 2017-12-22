function MainController(a, b) {
  a.name = 'Todd';
  a.likes = ['pizza', 'coke'];
}

angular
  .module('app')
  .controller('MainController', ['$scope', '$rootScope', MainController]);
