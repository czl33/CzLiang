/**
 * Created by Administrator on 2017/9/19.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('LoginCtrl', ['$scope', '$ionicPopup', 'localStorageService', '$state',function ($scope, $ionicPopup, localStorageService,$state) {
      var USER_KEY = 'user';
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.login = function () {
        var account = localStorageService.get(USER_KEY, {
          username: 'xiaoliang',
          password: '123456',
          isLogin:false
        });
        var shop=localStorageService.get('Shop',{
          boss:'小小亮',
          phone:'13235915159'
        });
        localStorageService.update('Shop',shop);
        if (account.username === $scope.user.username && account.password === $scope.user.password) {
          account.isLogin = true;
          localStorageService.update(USER_KEY, account);
          $state.go('app.home');
        }
        else {
          $ionicPopup.alert({
            title: '警告',
            template: '用户或密码不正确',
            okText: '确定',
            okType: 'button-energized'
          });
        }
      };
    }]);
})();
