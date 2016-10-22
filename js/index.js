angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope, $http) {
  $scope.dataDonatur;
  $scope.primary = 'blue';
  $scope.accent = 'green';

  $scope.storeDonatur = function($event) {
  	event.preventDefault();

  	var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
    var data = $.param({
        nama:$scope.dataDonatur.nama,
        alamat:$scope.dataDonatur.alamat,
        email: $scope.dataDonatur.email,
        tgl_lahir:$scope.dataDonatur.tglLahir,
      	bank: $scope.dataDonatur.bank,
      	donasi:$scope.dataDonatur.donasi
    });
        

  	$http.post('http://server13.zz.mu/api/donatur/store', data, config).success(function(data) {
  		console.log(data)
  	});
  }  
});



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/