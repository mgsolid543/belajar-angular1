/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp", []);

app.controller("myCtrl1", function ($scope){
    
    $scope.namaDepan = 'Fajar';
    $scope.namaBelakang = 'Bukhaeri';
})

app.controller("myCtrl2", function ($scope){
    
    $scope.namaDepan = 'Irpan';
    $scope.namaBelakang = 'Budiana';
})
