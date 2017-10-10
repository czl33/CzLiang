/**
 * Created by Administrator on 2017/10/9.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter','$ionicPopup',function($scope,$ionicLoading,$timeout,$filter,$ionicPopup) {
      $scope.products=[];
      $scope.sourceProducts=[];
      $scope.lsProducts=[];
      $scope.searchMV={
        content:''
      };
      $scope.hasMore=true;
      $scope.isLoading =false;
      var pageIndex = 1;
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="lines" class="spinner-calm"></ion-spinner><p ">数据加载中...</p>',
        });
     /*   $timeout(function () {
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
        },3000);*/
        $scope.doRefresh();

      });

      $scope.getName=function () {
        $scope.lsProducts=$filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
        if ($scope.lsProducts.length<=0){
          $ionicPopup.alert({
            title: '提示',
            template: '没有对应的商品',
            okText: '确定',
            okType: 'button-energized'
          });
        }
        else {
          $scope.products=$scope.lsProducts
        }
      };
      $scope.doRefresh=function () {
        pageIndex=1;
        $scope.hasMore=true;
        $scope.products=[];
        loadDate();

      };
      $scope.loadMore=function () {
        pageIndex++;
        loadDate();

      };
      function loadDate(){
        if($scope.isLoading==true){
          return;
        }
        $scope.isLoading=true;
        $timeout(function () {
          var list=[
           {
              ID:1
              ,Images:['views/product/imgs/1.jpg']
              ,Name:'iphone 8'
              ,Price:'5333'
              ,Store:12
              ,Barcode:'22532121'
              ,BigName:'手机'
            },
            {
              ID:2
              ,Images:['views/product/imgs/2.jpg']
              ,Name:'iphone 6'
              ,Price:'23333'
              ,Store:12
              ,Barcode:'98984121'
              ,BigName:'手机'
            },
            {
              ID:3
              ,Images:['views/product/imgs/3.jpg']
              ,Name:'MX6'
              ,Price:'43333'
              ,Store:12
              ,Barcode:'154564561'
              ,BigName:'手机'
            },
            {
              ID:4
              ,Images:['views/product/imgs/4.jpg']
              ,Name:'小米6'
              ,Price:'63333'
              ,Store:12
              ,Barcode:'2154897441'
              ,BigName:'手机'
            },
            {
              ID:5
              ,Images:[]
              ,Name:'魅族6plus'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            },
             {
              ID:5
              ,Images:[]
              ,Name:'魅族2plus'
              ,Price:'53333'
              ,Store:12
              ,Barcode:'12121212121'
              ,BigName:'手机'
            }

          ];
          /*$scope.products=[];*/
          $scope.products=$scope.products.concat(list);
          $scope.sourceProducts=angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete')
          $scope.$broadcast('scroll.infiniteScrollComplete')
          $ionicLoading.hide();
          $scope.isLoading=false;
          if (pageIndex==3){
            $scope.hasMore=false;
          }

        },3000);


      }

    }])

})();
