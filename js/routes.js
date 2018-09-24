angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('eugene', {
    url: '/page2',
    templateUrl: 'templates/eugene.html',
    controller: 'eugeneCtrl'
  })

  .state('harvey', {
    url: '/page3',
    templateUrl: 'templates/harvey.html',
    controller: 'harveyCtrl'
  })

  .state('henry', {
    url: '/page4',
    templateUrl: 'templates/henry.html',
    controller: 'henryCtrl'
  })

  .state('jericho', {
    url: '/page11',
    templateUrl: 'templates/jericho.html',
    controller: 'jerichoCtrl'
  })

  .state('miguel', {
    url: '/page10',
    templateUrl: 'templates/miguel.html',
    controller: 'miguelCtrl'
  })

  .state('rocco', {
    url: '/page9',
    templateUrl: 'templates/rocco.html',
    controller: 'roccoCtrl'
  })

  .state('reyvie', {
    url: '/page8',
    templateUrl: 'templates/reyvie.html',
    controller: 'reyvieCtrl'
  })

  .state('ederick', {
    url: '/page7',
    templateUrl: 'templates/ederick.html',
    controller: 'ederickCtrl'
  })

  .state('peter', {
    url: '/page6',
    templateUrl: 'templates/peter.html',
    controller: 'peterCtrl'
  })

  .state('sese', {
    url: '/page5',
    templateUrl: 'templates/sese.html',
    controller: 'seseCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});