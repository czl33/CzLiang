/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','$ionicHistory','$state','$ionicPopup','localStorageService','$ionicActionSheet',function($scope,$ionicHistory,$state,$ionicPopup,localStorageService,$ionicActionSheet) {
    $scope.goBack=function () {
      $ionicHistory.nextViewOptions(
        {
          disableBack:true
        }
      );
      $state.go('app.home')
    };
    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        shopphone:''
      })

    })
$scope.call=function () {

  $ionicActionSheet.show({
    buttons:[{text:'拨打电话'}],
    cancelText:'<b>取消</b>'
    ,buttonClicked:function (mobilePhone) {
      $window.location.href="tel:"+mobilePhone;
    }
  })

}

    $scope.gohome=function(){
      $ionicPopup.alert({
        title: '提示',
        template: '退出成功！！',
        okText: '确定',
        okType: 'button-energized'
      });
      var user = localStorageService.get('user');
      user.isLogin=false;
      localStorageService.update('user',user)
      $state.go('login')


    }

  }])
})()
