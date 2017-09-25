/**
 * Created by Administrator on 2017/9/25.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope',function ($scope){
     $scope.categories =[
       {
         ID :1,
         Name : '电脑整机',
         Children : [
           {
             ID:11,
             Name:'笔记本'
           },
           {
             ID:12,
             Name:'台式机'
           },
           {
             ID:13,
             Name:'平板电脑'
           },

         ]
       },
       {
         ID :2,
         Name : '电脑配件',
         Children :[
           {
             ID:1,
             Name:'cpu'
           },
           {
             ID:2,
             Name:'显卡'
           },
           {
             ID:3,
             Name:'机箱'
           },
         ]

       }
     ];
     $scope.activeCategory={};
      if($scope.categories.length>0){
        $scope.activeCategory=$scope.categories[0];
      }
   $scope.seleCategory=function(index) {
     if($scope.activeCategory.ID!=$scope.categories[index].ID){
       $scope.activeCategory=$scope.categories[index];
     }

   }

    }])
})();
