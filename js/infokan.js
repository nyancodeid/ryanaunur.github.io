angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($timeout, $scope, $http, $log) {
  $scope.primary = 'blue';
  $scope.accent = 'green';

  $scope.formData;
  $scope.infoPenerima;

  $scope.storeDonatur = function($event) {
  	event.preventDefault();

  	var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
    var data = $scope.param({
        nama:$scope.infoPenerima.nama,
        umur:$scope.infoPenerima.umur,
        tgl_lahir:$scope.tglLahir,
    	bank: $scope.bank,
    	donasi:$scope.donasi
    });
        

  	$http.post('http://localhost/donatur/store', data, config).success(function(data) {
  		console.log(data)
  	});
  }  

  $scope.getProvinsi = function($event) {
      $http.get("data/provinsi.json")
        .success(function(results) {
          console.log('results', JSON.stringify(results));
          return results.data;
        });
    };

  $scope.provinsi = null;
  $scope.provinsis = null;
  $scope.kabupaten = null;
  $scope.kabupatens = null;

  $scope.loadProvinsi = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $http.get("https://cdn.rawgit.com/ryanaunur/sedekahreceh/master/provinsi.json").then(function(response) {
          $scope.provinsis = response.data;
      });

    }, 650);
  };

  $scope.loadKabupaten = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $http.get("https://cdn.rawgit.com/ryanaunur/sedekahreceh/master/kota.json").then(function(response) {
        var kotas = new JSLINQ(response.data)
                 .Where(function (kota) { return kota.provinsi == $scope.infoPenerima.provinsi.id })
                 .OrderBy(function (kota) { return kota.nama });
        $log.info(kotas);
        $scope.kabupatens = kotas.items;
      });

    }, 650);
  };
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/