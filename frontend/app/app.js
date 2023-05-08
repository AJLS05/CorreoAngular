var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', ['ngFileUpload']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
				.state('registrarse', {
            url: '/registrarse',
            templateUrl: '/views/registrarse.html',
            controller: 'RegistrarseController'
        })
				.state('enviarCorreo', {
            url: '/enviarCorreo',
            templateUrl: '/views/enviarCorreo.html',
            controller: 'EnviarCorreoController'
        })
				.state('detalleCorreo', {
            url: '/detalleCorreo',
            templateUrl: '/views/detalleCorreo.html',
            controller: 'DetalleCorreoController'
        })
				.state('correosRecibidos', {
            url: '/correosRecibidos',
            templateUrl: '/views/correosRecibidos.html',
            controller: 'CorreosRecibidosController'
        })
				.state('correosEnviados', {
            url: '/correosEnviados',
            templateUrl: '/views/correosEnviados.html',
            controller: 'CorreosEnviadosController'
        });
}])
