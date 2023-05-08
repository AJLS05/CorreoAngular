angular.module('AngularScaffold.Controllers')
    .controller('HomeController', ['$scope','$state','$sessionStorage','$http', function ($scope,$state, $sessionStorage,$http) {
      $scope.irRegistrar = function(){
        $state.go('registrarse');
      }
      $scope.autenticar = function(){
        var usuario = {
          "correo": $scope.correo,
          "contrasena": $scope.contrasena
        };
        $http.post('http://localhost:8081/autenticar',usuario).success(function(datos){
          $sessionStorage.usuario = {
            "correo": datos[0].correo,
            "nombreCompleto": datos[0].nombreCompleto
          };
          console.log($sessionStorage.usuario);
          $state.go('correosRecibidos');
        }).error(function(datos){
          alert(datos+"\n Vuelva a ingresar su correo y contraseña");
          $scope.correo = "";
          $scope.contrasena = "";
        });
      }
}]);
