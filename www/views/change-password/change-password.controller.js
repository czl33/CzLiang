/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','localStorageService','$state','$ionicPopup',function ($scope,localStorageService,$state,$ionicPopup) {
    var USER_KEY = 'user';
    $scope.user={
      oldPassword:'',
      password:'',
      confirmPassword:''
    };
    $scope.save=function () {
      var user = localStorageService.get(USER_KEY);
      if (user.password=== $scope.user.oldPassword){
        user.password=$scope.user.password;
        localStorageService.update(USER_KEY,user)
        $state.go('login')
      }
      else {
        $ionicPopup.alert(
          {
            title: '提示',
            template: '旧密码输入错误，请重新输入',
            okText: '确定',
            okType: 'button-energized'
          }
        )


      }
    }

  }])

})();
