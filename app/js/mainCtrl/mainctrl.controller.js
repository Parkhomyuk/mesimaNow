angular.module('tasksList')
    .controller('mainCtrl', function($scope,$translate,$location){
        $scope.modalShown = false;

        $scope.logOn = 'registration';
        $scope.logIn = 'logIn';
        $scope.openInf=false;
        $scope.menuInf=[{name:'UNLIMITPAKAGE',href:'/unlimitedPackages'},{name:'HOWITWORKS',href:""},{name:'HOWTOBECACONTAROCTOR',href:""},{name:'BLOG',href:""},{name:'CLIENTREWIEWS',href:""},{name:'TERMS',href:""},{name:'FAQ',href:""},{name:'CONTACTS',href:""}];
        $scope.rotateGamburger={};
        $scope.toggleModal = function(param) {
            $scope.par=param;
            $scope.modalShown = !$scope.modalShown;
        };
        $scope.contionationRegistration=function(param){

        }
        $scope.openInfMenu=function(){
            if($scope.openInf==false){
                $scope.openInf=true;
               /* $scope.rotateGamburger={transform: 'rotate(45deg)'}*/
                $scope.rotateGamburger={ backgroundColor:"#d1ffed",boxShadow: "-10px 0px #d1ffed"}
            }else{
                $scope.openInf=false;
                $scope.rotateGamburger={}
            }
        }
            $scope.infMenuSubCat=function(href){
                $scope.openInf=false;
                $scope.rotateGamburger={}
                $location.path(href);
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
