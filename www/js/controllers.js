angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('homeCtrl', function($scope) {})
.controller('homeCtrl', function($scope) {}) 
.controller('eventosCtrl', function($scope) {})
.controller('quemSomosCtrl', function($scope) {})
.controller('mulheresCtrl', function($scope) {})   
.controller('jovensCtrl', function($scope) {})   
.controller('tesourariaCtrl', function($scope) {})  
.controller('cadastroCtrl', function($scope) {})
.controller('homensCtrl', function($scope) {})
.controller('casaisCtrl', function($scope) {})
.controller('louvorCtrl', function($scope) {})
.controller('pedidosDeOraOCtrl', function($scope) {})
.controller('agendaCtrl', function($scope) {})
 

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicFire) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.signOut = function(logUser){
    $ionicFire.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }
})

.controller('LoginCtrl', function($scope, $ionicModal, $ionicPopup, $ionicLoading, $mSecure, $ionicFire, $rootScope, $location, $ionicPlatform) 
{
  $scope.regUserIsValid;
  $rootScope.logUser = {};
  $rootScope.regUser = {};
  $rootScope.resetUser = {};
  $scope.validate = {
    login: function(logUser){
      if (logUser && logUser.user && logUser.pass) {
        return {isValid: true};
      }
    },
    username: function(regUser){
      var isValidUsername;
      var minLength = 5;
      $ionicFire.database().ref('ionicFire/users').on('value', function(snapshot){
        return isValidUsername = !snapshot.child($mSecure.encode(regUser.username)).exists();
      });
      if (isValidUsername && regUser.username.length >= minLength) {
        $scope.regUsernameIsValid = true;
      } else{
        $scope.regUsernameIsValid = false;
      }
    },
    email: function(regUser){
      var isValidEmail;
      $ionicFire.database().ref('ionicFire/emailDump').on('value', function(snapshot){
        return isValidEmail = !snapshot.child($mSecure.encode(regUser.email)).exists();
      });
      if ($mSecure.isEmail(regUser.email) && isValidEmail) {
        $scope.regEmailIsValid = true;
      } else{
        $scope.regEmailIsValid = false;
      }
    },
    password: function(regUser){
      var hasNumber = regUser.pass.match(/\d+/g);
      var hasUpperCase = regUser.pass.toLowerCase(); 
      var hasSpecialChar = new RegExp(/[@~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

      if (regUser.pass.length >= 8 && hasNumber != null && hasUpperCase != regUser.pass && hasSpecialChar.test(regUser.pass)){
        $scope.regPassIsValid = true;
      } else {
        $scope.regPassIsValid = false;
      }
      if ($scope.regPassIsValid && regUser.pass == regUser.confirmPass){
        $scope.regConfirmPassIsValid = true;
      } else {
        $scope.regConfirmPassIsValid = false;
      }
    }
  }
  $scope.login = function(logUser){
    if ($mSecure.check.email(logUser.user) && logUser.pass) {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
      });
      $ionicFire.auth().signInWithEmailAndPassword(logUser.user, logUser.pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $ionicPopup.alert({
          title: 'Acesso negado',
          template: errorMessage,
          buttons: [{
            type: "mui-button-orange",
            text: "Ok"
          }]
        });
        $ionicLoading.hide();
      });
    } else {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
      });
      $ionicFire.database().ref('ionicFire/users').on('value', function(snapshot){
        if (snapshot.child($mSecure.encode(logUser.user)).exists()) {
          $ionicFire.auth().signInWithEmailAndPassword(snapshot.child($mSecure.encode(logUser.user)).val().email, logUser.pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            $ionicPopup.alert({
              title: 'Acesso Negado 1',
              template: errorMessage,
              buttons: [{
                type: "mui-button-orange",
                text: "Ok"
              }]
            });
            $ionicLoading.hide();
          });
        } else {
          $ionicPopup.alert({
            title: 'Acesso Negado 2',
            template: 'There is no user record corresponding to this identifier. The user may have been deleted.',
            buttons: [{
              type: 'mui-button-orange',
              text: 'Ok'
            }]
          });
          $ionicLoading.hide();
        }
      });
    }
  }
  $scope.create = function(regUser){
    if ($scope.regUsernameIsValid && $scope.regPassIsValid && $scope.regConfirmPassIsValid && $scope.regEmailIsValid) {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
      });
      $scope.modalLoginSignUp.hide();
      $ionicFire.auth().createUserWithEmailAndPassword(regUser.email, "nuiuno!23").catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $ionicPopup.alert({
          title: "Sign up Failed",
          template: errorMessage,
          buttons: [{
            type: "mui-button-orange",
            text: "Try Again"
          }]
        });
        $ionicLoading.hide();
      });
      $ionicFire.database().ref('ionicFire/users/'+$mSecure.encode(regUser.username)).set({
        username: regUser.username,
        email: regUser.email
      });
      $ionicFire.database().ref('ionicFire/emailDump/'+$mSecure.encode(regUser.email)).set({
        status: true
      });
    } else {
      $ionicPopup.alert({
        title: "Sign up Failed",
        template: "Check you to see if everything is correct and try again",
        buttons: [{
          type: "mui-button-orange",
          text: "Try Again"
        }]
      });
    }
  }
  $scope.reset = function(resetUser){
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral" class="mui-spinner-orange"></ion-spinner>'
    });
    $ionicFire.auth().sendPasswordResetEmail(resetUser.email).then(function() {
      $ionicPopup.alert({
        title: 'Reset Success',
        template: 'An email has been sent to '+resetUser.email,
        buttons: [{
          type: 'mui-button-orange',
          text: 'Ok'
        }]
      });
      $ionicLoading.hide();
      $rootScope.resetUser.email = "";
    }, function(error) {
      // An error happened.
      $ionicPopup.alert({
        title: 'Reset Failed',
        template: error.message,
        buttons: [{
          type: 'mui-button-orange',
          text: 'Ok'
        }]
      });
      $ionicLoading.hide();
      $rootScope.resetUser.email = "";
    });
  }
  $ionicModal.fromTemplateUrl('templates/login-menu.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLoginMenu = modal;
  });
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLoginSignUp = modal;
  });
  $ionicModal.fromTemplateUrl('templates/terms.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLoginTerms = modal;
  });
});
