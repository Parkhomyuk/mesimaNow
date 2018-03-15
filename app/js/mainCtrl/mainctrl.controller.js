angular.module('tasksList')
    .controller('mainCtrl', function($scope){
        $scope.modalShown = false;

        $scope.logOn = 'registration';
        $scope.logIn = 'logIn';
        $scope.toggleModal = function(param) {
            console.log( '$scope.paramReg Controller=>'+param);
            $scope.par=param;
            /*if(param==$scope.par.logOn){
                console.log( param);
                $scope.par=param;
            }else{

                $scope.paramReg=$scope.par2;
            }*/
            $scope.modalShown = !$scope.modalShown;
        };
        $scope.contionationRegistration=function(param){

        }
    });
