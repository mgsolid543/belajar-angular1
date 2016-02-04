// app.js
   'use strict';
   var appku = angular.module('myapp', ['ui.router','restangular']);
   appku.config(function(RestangularProvider, $stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/beranda');
    $stateProvider
     // state beranda dan view bersarang ========================================
     .state('beranda', {
      url: '/beranda',
      templateUrl: 'beranda.html'
     })
     
     .state('beranda.list', {
         url: '/list',
         templateUrl: 'beranda-list.html',
         controller: function ($scope) {
             $scope.list = [
                 'Javascript',
                 'AngularJS',
                 'PHP'
             ];
         }
         
     })
     
     .state('beranda.teks', {
         url: '/teks',
         template: 'Ini adalah contoh penggunaan data string',
         })
         
     // state tentang dan view bernama majemuk =================================
     .state('tentang', {
      url: '/tentang',
      templateUrl: 'tentang.html'
     })
});