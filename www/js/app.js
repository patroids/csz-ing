// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('csz-ing', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
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
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('dict', {
    url: '/dict',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('dict.c', {
    url: '/c',
    params: {
      start_char: 'c'
    },
    views: {
      'dict-c': {
        templateUrl: 'templates/tab-dict.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  .state('dict.c-detail', {
    url: '/c/:dict_set',
    params: {
      start_char: 'c'
    },
    views: {
      'dict-c': {
        templateUrl: 'templates/dict-detail.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  .state('dict.s', {
    url: '/s',
    params: {
      start_char: 's'
    },
    views: {
      'dict-s': {
        templateUrl: 'templates/tab-dict.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  .state('dict.s-detail', {
    url: '/s/:dict_set',
    params: {
      start_char: 's'
    },
    views: {
      'dict-s': {
        templateUrl: 'templates/dict-detail.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  .state('dict.z', {
    url: '/z',
    params: {
      start_char: 'z'
    },
    views: {
      'dict-z': {
        templateUrl: 'templates/tab-dict.html',
        controller: 'DictCtrl'
      }
    }
  })

  .state('dict.z-detail', {
    url: '/z/:dict_set',
    params: {
      start_char: 'z'
    },
    views: {
      'dict-z': {
        templateUrl: 'templates/dict-detail.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  .state('dict.ing', {
    url: '/ing',
    params: {
      start_char: 'ing'
    },
    views: {
      'dict-ing': {
        templateUrl: 'templates/tab-dict.html',
        controller: 'DictCtrl'
      }
    }
  })

  .state('dict.ing-detail', {
    url: '/ing/:dict_set',
    params: {
      start_char: 'ing'
    },
    views: {
      'dict-ing': {
        templateUrl: 'templates/dict-detail.html',
        controller: 'DictCtrl'
      }
    }
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dict/c');

});
