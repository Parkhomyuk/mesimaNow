angular.module('tasksList')
    .controller('mainCtrl', function($scope,$translate){
        $scope.modalShown = false;

        $scope.logOn = 'registration';
        $scope.logIn = 'logIn';
        $scope.toggleModal = function(param) {
            $scope.par=param;
            $scope.modalShown = !$scope.modalShown;
        };
        $scope.contionationRegistration=function(param){

        }
        $scope.language = 'Russian';
        $scope.languages = ['English', 'עברית','Русский'];
        $scope.updateLanguage = function(lang) {
            if(lang=='English'){
                $scope.language = 'English';
                console.log(lang+' English');
                console.log( $scope.language+' scope');
            }
            if(lang=='Русский'){
                $scope.language = 'Russian';
            }if(lang=='עברית'){
                $scope.language = 'Hebrew';
            }
            $translate.use($scope.language);

            console.log($scope.language);
            console.log(lang);
        };
    });
