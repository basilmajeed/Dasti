'use strict';

/**
 * @ngdoc overview
 * @name dastiApp
 * @description
 * # dastiApp
 *
 * Main module of the application.
 */
angular
  .module('dastiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
    $urlRouterProvider.otherwise('/home')

    $stateProvider
    .state('home', 
    {
      url:'/home',
      templateUrl:'views/main.html',
      controller:'MainCtrl'
    }).state('menu', 
    {
      url:'/menu',
      templateUrl:'views/menu.html',
      controller:'MenuCtrl'
    }).state('admin',
    {
      url:'/admin',
      templateUrl:'views/admin.html',
      controller:'AdminCtrl'
    }).state('order', 
    {
      url:'/orders',
      templateUrl:'views/orders.html',
      controller:'AdminCtrl'
    }).state('edit_menu', 
    {
      url:'/edit_menu',
      templateUrl:'views/edit_menu.html',
      controller: 'editMenuCtrl'
    }).state('add_item', 
    {
      url:'/addItem',
      templateUrl:'views/add_item.html',
      controller: 'editMenuCtrl'
    }).state('delete_item', 
    {
      url:'/deleteItem',
      templateUrl:'views/delete_item.html',
      controller: 'editMenuCtrl'
    }).state('wait', 
    {
      url:'/wait',
      templateUrl:'views/wait.html',
      controller: 'MainCtrl'
    }).state('rate', 
    {
      url:'/rate',
      templateUrl:'views/rate.html',
      controller: 'editMenuCtrl'
    })
  });
