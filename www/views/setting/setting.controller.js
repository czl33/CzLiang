/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','$ionicHistory','$state','$ionicPopup',function($scope,$ionicHistory,$state,$ionicPopup) {
    $scope.goBack=function () {
      $ionicHistory.nextViewOptions(
        {
          disableBack:true
        }
      );
      $state.go('app.home')
    }
    $scope.gohome=function(){
      $ionicPopup.alert({
        title: '提示',
        template: '退出成功！！',
        okText: '确定',
        okType: 'button-energized'
      });
      $state.go('login')

    }
  }])
})()
