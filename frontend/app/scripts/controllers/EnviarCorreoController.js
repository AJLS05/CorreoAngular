angular.module('AngularScaffold.Controllers')
    .controller('EnviarCorreoController', ['$scope','$state','$sessionStorage','$http','Upload', function ($scope,$state, $sessionStorage,$http,Upload) {
      if($sessionStorage.usuario == null){
        $state.go('home');
      }
      $scope.imagenes = [];
      $scope.enviarCorreo = function(){
        var destinatarios = $scope.destinatarios.split(',');
        var correo = {
          usuarioEnvia:$sessionStorage.usuario.correo,
          asunto:$scope.asunto,
          contenido:$scope.contenido
        };
        $http.post('http://localhost:8081/correo',correo)
        .success(function(datos){
          console.log(datos);
          for(var i=0; i<destinatarios.length; i++){
            var usuarioCorreo = {
              idCorreo: datos,
              correoUsuario: destinatarios[i]
            };
            $http.post('http://localhost:8081/UsuarioCorreo',usuarioCorreo)
            .success(function(datos2){
              console.log("Enviado a usuario "+usuarioCorreo.correoUsuario);
            }).error(function(datos2){
              console.log("No enviado a usuario "+usuarioCorreo.correoUsuario);
            });

          }
          for(var i=0; i<$scope.imagenes.length; i++){
            var imagenCorreo = {
              idCorreo: datos,
              url: $scope.imagenes[i]
            };
            $http.post('http://localhost:8081/imagenCorreo',imagenCorreo)
            .success(function(datos3){
              console.log("Se agrego imagen "+imagenCorreo.url);
            }).error(function(datos3){
              console.log("No se agrego imagen "+imagenCorreo.url);
            });
          }
        }).error(function(datos){
          alert('No se pudo enviar el correo');
        });

      }
      $scope.subir = function (file) {
        Upload.upload({
            url: 'https://api.cloudinary.com/v1_1/eliga-al/upload',
            data: {
              upload_preset: "Eliga-AL",
                file: file
            }
        }).then(function (resp) {
            $scope.imagenes.push(resp.data.url);
        }, function (resp) {
            console.log('Error: ' + resp.status);
        }, function (evt) {

        });
      }
    }]);
