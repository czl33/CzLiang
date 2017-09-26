/**
 * Created by haha on 2017/9/19.
 */
(function (){

  'use strict';
  angular.module('starter.services')
    .controller('HomeCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state){
      $scope.$on('$ionicView.beforeEnter',function (){
        var user=localStorageService.get('user');
        if(user.isLogin==false){
          $state('login')
        }
      });
    }])

})();
