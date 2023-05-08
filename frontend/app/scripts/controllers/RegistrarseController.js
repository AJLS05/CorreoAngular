angular.module('AngularScaffold.Controllers')
    .controller('RegistrarseController', ['$scope','$state','$sessionStorage','$http', function ($scope,$state, $sessionStorage,$http) {
      $scope.irAutenticar = function(){
        $state.go('home');
      }
      $scope.registrarse = function(){
        if($scope.contrasena1 === $scope.contrasena2){
          var usuario = {
            "correo": $scope.correo,
            "contrasena": $scope.contrasena1,
            "nombreCompleto": $scope.nombreCompleto
          };
          $http.post('http://localhost:8081/registrarse',usuario).success(function(datos){
            $sessionStorage.usuario = {
              "correo": $scope.correo,
              "nombreCompleto":$scope.nombreCompleto
            };
            //console.log($sessionStorage.usuario);
            $state.go('correosRecibidos');
          }).error(function(datos){
            alert(datos+"\n Correo ya existe");
            $scope.correo = "";
            $scope.contrasena1 = "";
            $scope.contrasena2 = "";
          });
        }else{
          alert('Las contraseñas no coinciden');
          $scope.contrasena1 = "";
          $scope.contrasena2 = "";
        }
      }
}]);
