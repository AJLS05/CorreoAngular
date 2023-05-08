angular.module('AngularScaffold.Controllers')
    .controller('DetalleCorreoController', ['$scope','$state','$sessionStorage','$http','$rootScope', function ($scope,$state, $sessionStorage,$http,$rootScope) {
      if($sessionStorage.usuario == null){
        $state.go('home');
      }
      $scope.correo = $rootScope.correo;
      //console.log($rootScope.correo);
      $scope.imagenes = [];
      var imagenesCorreo = {
        idCorreo: $scope.correo
      };
      $http.post('http://localhost:8081/imagenesCorreo',imagenesCorreo)
      .success(function (datos){
        $scope.imagenes = datos;
      }).error(function(datos){
        console.log("Error");
        console.log(datos);
      });


}]);
