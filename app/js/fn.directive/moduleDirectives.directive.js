angular.module('tasksList')
    .directive('modalDialog',function($window,$location){
        return {
            restrict:'E',
            scope:{
               show:'=',
               par:'=',
               paramReg:'='
            },
            replace: true,
            transclude: true,
            link: function(scope,element, attrs){
                console.log('scope directive '+scope.par);
                scope.dialogStyle = {};

                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function() {
                    scope.show = false;
                };
                scope.contReg=function(){
                    $location.path('/contionRegistration');
                }
        },
            /*template: '<div class="ng-modal" ng-show="show">            <div class="ng-modal-overlay" ng-click="hideModal()"></div>             <div class="ng-modal-dialog" ng-style="dialogStyle">            <div class="ng-modal-close" ng-click="hideModal()">X</div>             <div class="ng-modal-dialog-content" ng-transclude></div>         </div>        </div> '*/
            templateUrl:'views/registration.html'
        }
    });