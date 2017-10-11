/**
 * Created by Administrator on 2017/10/11.
 */
angular.module('starter.directive')
  .directive('companyDirective',[function () {
    return{
      restrict:'E',
      template:'<div style="position:fixed;bottom: {{bottom}};width: 100%;height: 44px;text-align: center;">\
                    <h6 class="title"><span><i class="icon ion-social-github"></i>2010-2017 czl 1511</h6>\
                   </div>',
      replace:true,
      scope:{
        bottom:'@'
      }
    }

  }]);
