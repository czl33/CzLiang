/**
 * Created by Administrator on 2017/10/9.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter',function($scope,$ionicLoading,$timeout,$filter) {
      $scope.products=[];
      $scope.sourceProducts=[];
      $scope.searchMV={
        content:''
      };
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="lines" class="spinner-calm"></ion-spinner><p ">数据加载中...</p>',
        });
        $timeout(function () {
          $ionicLoading.hide();
          $scope.products=[
            {
              ID:1
              ,Images:['views/product/imgs/1.jpg']
              ,Name:'iphone 8'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            },
            {
              ID:2
              ,Images:['views/product/imgs/1.jpg']
              ,Name:'iphone 6'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            },
            {
              ID:3
              ,Images:['views/product/imgs/1.jpg']
              ,Name:'MX6'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            },
            {
              ID:4
              ,Images:[]
              ,Name:'小米6'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            },
            {
              ID:5
              ,Images:['views/product/imgs/1.jpg']
              ,Name:'魅族6plus'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            }
          ];
          $scope.sourceProducts=angular.copy($scope.products)
        },3000);

      });
      $scope.getName=function () {
        $scope.products=$filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        })

      }

    }])

})();
