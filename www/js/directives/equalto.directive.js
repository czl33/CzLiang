/**
 * Created by Administrator on 2017/10/13.
 */
(function () {
  'use strict';
  angular.module('starter.directive')
    .directive('equalto',[function () {
      return{
        restrict:'A',
        require:'ngModel',
        link:function (scope,element,attrs,ngModelCtrl) {
          function equalto(viewValue) {
            var valid=(viewValue===scope.$eval(attrs.equalto));
            ngModelCtrl.$setValidity('equalto',valid);
            return valid?viewValue:undefined;

          };
          ngModelCtrl.$parsers.unshift(equalto);
        }
      }

    }])

})()
