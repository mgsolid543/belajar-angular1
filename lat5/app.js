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
      views: {
        '': { templateUrl: 'tentang.html'},
        'KolomSatu@tentang': { 
            template: 'UI-Router merupakan framework routing untuk AngularJS yang dibangun oleh tim AngularUI. UI-router memungkinkan kita untuk membuat navigasi yang lebih baik.'
        },
        'KolomDua@tentang': {
            templateUrl: 'data-table.html',
            controller: 'tentangCtrl'
        }
      }
    })
});

appku.controller('tentangCtrl', function($scope) {
 $scope.list = [
  {
   nama: 'Hp Android S4',
   harga: 'Rp 2 juta'
  },
  {
   nama: 'Hp Iphone6',
   harga: 'Rp 6 juta'
  },
  {
   nama: 'Tablet Ipad mini',
   harga: 'Rp 5 juta'
  }];
});