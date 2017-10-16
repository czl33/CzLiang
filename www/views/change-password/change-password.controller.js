/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','localStorageService','$state','$ionicPopup','popupService',function ($scope,localStorageService,$state,$ionicPopup,popupService) {
    var USER_KEY = 'user';
    $scope.user={
      oldPassword:'',
      password:'',
      confirmPassword:''
    };
    $scope.save=function () {

      var user = localStorageService.get(USER_KEY);
      console.log($scope.changePasswordForm.$valid)
      if($scope.changePasswordForm.$invalid){
        popupService.toast('二次密码输入有误')
        return;

      }
      else if (user.password===$scope.user.oldPassword&&$scope.user.password=== $scope.user.confirmPassword){
        user.password=$scope.user.password;
        localStorageService.update(USER_KEY,user)
        $state.go('login')
      }
      else {

        popupService.alert('旧密码输入错误，请重新输入')


      }
    }

  }])

})();
