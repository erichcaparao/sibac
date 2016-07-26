angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })


      .state('menu.home', {
    url: '/home',
    views: {
      'menu': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.eventos', {
    url: '/eventos',
    views: {
      'menu': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('menu.quemSomos', {
    url: '/quem_somos',
    views: {
      'menu': {
        templateUrl: 'templates/quemSomos.html',
        controller: 'quemSomosCtrl'
      }
    }
  })

  .state('menu.mulheres', {
    url: '/mulheres',
    views: {
      'menu': {
        templateUrl: 'templates/mulheres.html',
        controller: 'mulheresCtrl'
      }
    }
  })

  .state('menu.jovens', {
    url: '/jovens',
    views: {
      'menu': {
        templateUrl: 'templates/jovens.html',
        controller: 'jovensCtrl'
      }
    }
  })

  .state('menu.tesouraria', {
    url: '/tesouraria',
    views: {
      'menu': {
        templateUrl: 'templates/tesouraria.html',
        controller: 'tesourariaCtrl'
      }
    }
  })


  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('homens', {
    url: '/homens',
    templateUrl: 'templates/homens.html',
    controller: 'homensCtrl'
  })

  .state('menu.casais', {
    url: '/casais',
    views: {
      'menu': {
        templateUrl: 'templates/casais.html',
        controller: 'casaisCtrl'
      }
    }
  })

  .state('menu.louvor', {
    url: '/louvor',
    views: {
      'menu': {
        templateUrl: 'templates/louvor.html',
        controller: 'louvorCtrl'
      }
    }
  })

  .state('menu.pedidosDeOraO', {
    url: '/pedidos',
    views: {
      'menu': {
        templateUrl: 'templates/pedidosDeOraO.html',
        controller: 'pedidosDeOraOCtrl'
      }
    }
  })

  .state('agenda', {
    url: '/agenda',
    templateUrl: 'templates/agenda.html',
    controller: 'agendaCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});