/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService','$ionicHistory',function($scope,$stateParams,localStorageService,$ionicHistory) {
$scope.title=$stateParams.title;
    $scope.property=$stateParams.property;
    $scope.shop=localStorageService.get('Shop',{
      phone:'13235915159',
      createTime:'2017-9-27 17:10',
      name:'小亮的店铺',
      jc:'',
      boss:'',
      names:'',
      email:'',
      shopphone:'13235915159'
    })
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
      $ionicHistory.goBack()


    }
  }])
})()
