// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'makerBlock'])

.run(function($ionicPlatform, $ionicFire, $mSecure, $rootScope, $location, $ionicLoading, $ionicHistory) {
  var config = {
    //Firebase config here
  apiKey: "AIzaSyBRd7ob8hwED_7XM0ZFBdxMVPJpkQ-R7tQ",
      authDomain: "249298122531.firebaseapp.com",
      databaseURL: "https://sibac-1376.firebaseio.com",
      storageBucket: "sibac-1376.appspot.com",
  };
  $ionicLoading.show({
    template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
  });
  $ionicPlatform.registerBackButtonAction(function (event) {
    if ($rootScope.loginPage) {
      navigator.app.exitApp();
    } else {
      ionic.History.backView();
    }
  }, 100);
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $ionicFire.init(config);
    $ionicFire.auth().onAuthStateChanged(function(user) {
      if (user) {
        $location.path('/menu/home');
        $ionicLoading.hide();
        $rootScope.logUser.pass = "";
        $rootScope.regUser.username = "";
        $rootScope.regUser.email = "";
        $rootScope.regUser.pass = null;
        $rootScope.logUser.confirmPass = "";
        $rootScope.loginPage = false;
      } else {
        $location.path('/login');
        $ionicLoading.hide();
        $rootScope.loginPage = true;
      }
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //Login View
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'templates/404.html',
    controller: 'LoginCtrl'
  })

  // setup an abstract state for the tabs directive
  

.state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  // Each tab has its own nav history stack:
.state('menu.home', {
    url: '/home',
    views: {
      'menu': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
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



  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/404');

});
