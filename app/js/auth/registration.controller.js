angular.module('tasksList')
    .controller('registrationCtrl', function($scope,$firebaseObject,Auth, $firebaseAuth,$rootScope,Auth){
        $scope.name='Alexssssss ';


        $rootScope.modalShown = {
            data: false,
            par:''
        };
        $scope.show = false;
        $scope.logOn = 'registration';
        $scope.logIn = 'logIn';
        $scope.user={
            name:$scope.name,
            email:$scope.email,
            password:$scope.password,
        }


         $scope.toggleModal = function(param) {
            $rootScope.modalShown.par = param;



            $rootScope.modalShown.data = !$rootScope.modalShown.data;



            console.log(param);

        }

    })