angular.module('AngularScaffold.Controllers')
.controller('CorreosRecibidosController', ['$scope','$state','$sessionStorage','$http','$rootScope', function ($scope,$state, $sessionStorage,$http,$rootScope) {
  if($sessionStorage.usuario == null){
    $state.go('home');
  }
  $scope.irEnviarCorreo = function(){
    $state.go('enviarCorreo');
  };
  $scope.irDetalle = function(correo){
    $rootScope.correo = correo;
    $state.go('detalleCorreo');
  }
  var usuario = {correo:$sessionStorage.usuario.correo};
  $scope.correos = [];
  $http.post('http://localhost:8081/correosRecibidos',usuario)
  .success(function(datos){
    $scope.correos = datos;
  }).error(function(datos){
    console.log(datos);
  });

}]);
