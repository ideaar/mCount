// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the mains directive
    .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html'
  })

  // Each main has its own nav history stack:

  .state('main.index', {
    url: '/index',
    views: {
      'main-index': {
        templateUrl: 'templates/main-index.html',
        controller: 'IndexCtrl'
      }
    }
  })

  .state('main.day', {
      url: '/day',
      views: {
        'main-day': {
          templateUrl: 'templates/main-day.html',
          controller: 'DayCtrl'
        }
      }
    })
    .state('main.week', {
      url: '/week',
      views: {
        'main-week': {
          templateUrl: 'templates/main-week.html',
          controller: 'WeekCtrl'
        }
      }
    })

  .state('main.month', {
    url: '/month',
    views: {
      'main-month': {
        templateUrl: 'templates/main-month.html',
        controller: 'MonthCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/index');

    // 配置选项卡，让tab在iOS和Android都显示在底部
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');
});
