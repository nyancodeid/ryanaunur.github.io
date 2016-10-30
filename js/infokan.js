angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($timeout, $scope, $http, $log) {
  $scope.primary = 'blue';
  $scope.accent = 'purple';
  $scope.red = 'red';

  $scope.infoPenerima;
  $scope.dataInforman;
  $scope.dataBukti;

  $scope.storeInfo = function($event) {
  	event.preventDefault();

    var data = $scope;

    sendAjax(data);

  }  

  $scope.getProvinsi = function($event) {
      $http.get("data/provinsi.json")
        .success(function(results) {
          return results.data;
        });
    };

  $scope.provinsi = null;
  $scope.provinsis = null;
  $scope.kabupaten = null;
  $scope.kabupatens = null;

  $scope.loadProvinsi = function() {
    // https://cdn.rawgit.com/ryanaunur/sedekahreceh/master
    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $http.get("data/provinsi.json").then(function(response) {
          $scope.provinsis = response.data;
      });

    }, 650);
  };

  $scope.loadKabupaten = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $http.get("data/kota.json").then(function(response) {
        var kotas = new JSLINQ(response.data)
                 .Where(function (kota) { return kota.provinsi == $scope.infoPenerima.provinsi.id })
                 .OrderBy(function (kota) { return kota.nama });
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


function loger(data) {
  console.info(data);
} 


function sendAjax(data) {
  var dataFoto = jQuery('input#files')[0].files;

  if (grecaptcha.getResponse().length == 0) {
    $('#errorcaptcha').show();

    return;
  }

  if (dataFoto.length == 3) {
    var form = new FormData(); 
    form.append("nama",           data.infoPenerima.nama);
    form.append("umur",           data.infoPenerima.umur);
    form.append("nama_ortu",      data.infoPenerima.nama_ortu);
    form.append("pekerjaan_ortu", data.infoPenerima.pekerjaan_ortu);
    form.append("alamat",         data.infoPenerima.alamat);
    form.append("kabupaten_kota", data.infoPenerima.kabupaten.nama);
    form.append("provinsi",       data.infoPenerima.provinsi.nama);
    form.append("telp",           data.infoPenerima.telp);
    form.append("lokasi",         data.infoPenerima.lokasi);
    form.append("alasan_bantuan", data.infoPenerima.alasan);
    form.append("biaya",          data.infoPenerima.biaya);
    form.append("nama_informan",  data.dataInforman.nama);
    form.append("no_hp_informan", data.dataInforman.nohp);
    form.append("email_informan", data.dataInforman.email);
    form.append("foto[0]", jQuery('input#files')[0].files[0]);
    form.append("foto[1]", jQuery('input#files')[0].files[1]);
    form.append("foto[2]", jQuery('input#files')[0].files[2]);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost/api/penerima/store",
      "method": "POST",
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
      $('#complete').show();
      $('html, body').animate({ scrollTop: $('#complete').offset().top }, 'slow');
      window.setTimeout(function(){ document.location.reload(true); }, 5000);
    });  
  } else {
    alert('Error Foto Kurang dari 3 ');
  }

  
  }

  $('document').ready(function() {
    $('#complete').hide();
    $('#errorcaptcha').hide();
  });


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/