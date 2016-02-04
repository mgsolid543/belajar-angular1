// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Dribel', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('bodyCtrl', function ($scope, $state, $http, $q) {
    console.log('bodyCtrl');
    
    $scope.init = function () {
        $scope.loadImg()
                .then(function (res){
                console.log('Gambar: ', res);
                $scope.listGambar = res.shots;    
        }, function (status) {
          console.log('Error: ', status);  
    
        })
    }
    
    $scope.loadImg = function () {
        var defer = $q.defer();
        
        $http.jsonp('http://api.dribble.com/shots/popular?callback=JSON_CALLBACK')
        .success(function (res) {
            defer.resolve(res)        
        })
        .error(function (status, err) {
            defer.reject(status)
        })
        
        return defer.promise;
    }
    
    $scope.init();
});