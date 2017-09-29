/**
 * Created by Administrator on 2017/9/29.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('CategoryService',['$rootScope',function($rootScope) {
      var service={};
      service.activeCategory={
        ID:3,
        Name:'默认分类'
      };
      service.updateCategory=function(value) {
        service.activeCategory=angular.copy(value);
        $rootScope.$broadcast('CategoryUpdate',service.activeCategory)
      };
      return service;

    }])

})()
