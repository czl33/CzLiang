/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function($scope,localStorageService,$state) {
    $scope.shop={};
    $scope.editShop=function(titlevalue,propertvValue) {
      $state.go('app.shop-edit',{
        title:titlevalue,
        property:propertvValue
      });

    };
    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        phone:'13235915159 ',
        createTime:'2017-9-27 17:10'
      })

    })

  }])
})()
