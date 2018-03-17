angular.module('tasksList')
    .controller('mainCtrl', function($scope,$translate,$location){
        $scope.modalShown = false;

        $scope.logOn = 'registration';
        $scope.logIn = 'logIn';
        $scope.openInf=false;
        $scope.menuInf=[{name:'PAGE_FIRST.UNLIMITPAKAGE',href:'/unlimitedPackages'},{name:'PAGE_FIRST.HOWITWORKS',href:""},{name:'PAGE_FIRST.HOWTOBECACONTAROCTOR',href:""},{name:'BLOG',href:""},{name:'PAGE_FIRST.CLIENTREWIEWS',href:""},{name:'PAGE_FIRST.TERMS',href:""},{name:'PAGE_FIRST.FAQ',href:""},{name:'PAGE_FIRST.CONTACTS',href:""}];
        $scope.rotateGamburger={};
        $scope.categoriesUnlimitPackages=[{name:"UNLIMITPACKAGE_PAGE.COURIER",price:310,status:false},{name:"UNLIMITPACKAGE_PAGE.REPAIRC",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.SHIPING",price:310,status:false},
            {name: "UNLIMITPACKAGE_PAGE.CLEANING",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.VIRTUALA",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.COMPUTER",price:310,status:false},{name: "UNLIMITPACKAGE_PAGE.EVENTS",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.DESIGN",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.WEB",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.PHOTO",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.INSTALATION",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.BEAUTY",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.REPAIRD",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.LEGAL",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.EDUCATION",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.REPAIRT",price:310,status:false}];
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
