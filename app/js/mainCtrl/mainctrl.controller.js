angular.module('tasksList')
    .controller('mainCtrl', function($scope,$translate,$location,$firebaseObject,Auth, $firebaseAuth, dataService){
        /*$scope.modalShown = false;*/
        $scope.test='mainCtrl scope';

        /*$scope.logOn = 'registration';
        $scope.logIn = 'logIn';*/
        $scope.openInf=false;
        $scope.createAssignment=false;
        $scope.menuInf=[{name:'PAGE_FIRST.UNLIMITPAKAGE',href:'/unlimitedPackages'},{name:'PAGE_FIRST.HOWITWORKS',href:""},{name:'PAGE_FIRST.HOWTOBECACONTAROCTOR',href:""},{name:'PAGE_FIRST.BLOG',href:""},{name:'PAGE_FIRST.CLIENTREWIEWS',href:""},{name:'PAGE_FIRST.TERMS',href:""},{name:'PAGE_FIRST.FAQ',href:""},{name:'PAGE_FIRST.CONTACTS',href:""}];
        $scope.rotateGamburger={};
        $scope.categoriesUnlimitPackages=[{name:"UNLIMITPACKAGE_PAGE.COURIER",price:310,status:false},{name:"UNLIMITPACKAGE_PAGE.REPAIRC",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.SHIPING",price:310,status:false},
            {name: "UNLIMITPACKAGE_PAGE.CLEANING",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.VIRTUALA",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.COMPUTER",price:310,status:false},{name: "UNLIMITPACKAGE_PAGE.EVENTS",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.DESIGN",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.WEB",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.PHOTO",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.INSTALATION",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.BEAUTY",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.REPAIRD",price:310,status:false},
            {name:"UNLIMITPACKAGE_PAGE.LEGAL",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.EDUCATION",price:310,status:false}, {name:"UNLIMITPACKAGE_PAGE.REPAIRT",price:310,status:false}];

        /*firebase start*/
       /* var rootRef= firebase.database().ref().child('angular');
        var ref=rootRef.child('object');
        $scope.object=$firebaseObject(ref);
        $scope.name=  null;*/
        $scope.email='parkhomyukalex@bk.ru';
        $scope.password=null;
        var email='parkhomyukalex@bk.ru';
        var password='Sokolov254';
        $scope.createUser = function() {
            $scope.message = null;
            $scope.error = null;

           /* Auth.getUser().createUserAndRetrieveDataWithEmailAndPassword({
                email: $scope.email,
                password: $scope.password
            }).then(function(userData) {
                $scope.message = "User created with uid: " + userData.uid;
                console.log('UserData '+userData);
            }).catch(function(error) {
                $scope.error = error;
                console.log('error  '+error);
            });*/

            var email='parkhomyukalex@gmail.com';
            var password='password';

            /*var auth=firebase.auth();*/
            const promise=Auth.getUser().createUserWithEmailAndPassword($scope.email, $scope.password);
            promise.then(function(user){console.log(user)});
            promise.catch(function(e){console.log(e.message)});
            firebase.auth().currentUser.sendEmailVerification().then(function() {
                // Email Verification sent!
                // [START_EXCLUDE]
                alert('Email Verification Sent!');
                // [END_EXCLUDE]
            });



            /*Auth.getUser().$createUserWithEmailAndPassword(
             {
             email: 'parrkh@mail.com',
             password: 'password'
             }
             ).catch(function(error) {
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             // ...
             });*/
        };
        Auth.getUser().onAuthStateChanged(function(firebaseUser){
            if(firebaseUser){
                console.log('firebaseUser '+firebaseUser.displayName);
                $scope.name=firebaseUser.displayName;
            }else{
                console.log(' not logger '+firebaseUser);
            }
        })
        var user=firebase.auth().currentUser;
        if(firebase.auth().currentUser){
            $scope.name=firebase.auth().currentUser.displayName;

            var emailAddress='parkhomyukalex@bk.ru'
            /*Auth.getUser().sendPasswordResetEmail(emailAddress).then(function() {
                // Email sent.
            }).catch(function(error) {
                // An error happened.
            });*/
        }else{
            $scope.name=null;
        }

          $scope.sigOut=function(){
              console.log('firebase.auth().signOut()');
              firebase.auth().signOut();
              $scope.name=null;
          }
        /*firebase end*/

        /*$scope.toggleModal = function(param) {
            $scope.par=param;
            $scope.modalShown = !$scope.modalShown;
           /!* $scope.name=  aut.getUser();*!/
            Auth.getUser().signInWithEmailAndPassword(email, password).then(function(){
                console.log('email '+email+' password '+password);
                firebase.auth().currentUser.updateProfile({
                    displayName:'Alex Parkhomyuk'
                })
                firebase.auth().currentUser.sendEmailVerification().then(function() {

                }).catch(function(error) {
                    // An error happened.
                });
                console.log('firebase.auth().currentUser.displayName '+firebase.auth().currentUser.displayName);

                    console.log(firebase.auth().currentUser);

                $scope.name=firebase.auth().currentUser.displayName;
            }).catch(function(error) {
                console.log(error.code) ;
                console.log(error.message) ;
            });
        };*/
        $scope.openCreateAssignment=function(){
            console.log('createAssignment '+$scope.createAssignment);
            if( $scope.createAssignment==false){
                $scope.createAssignment=true;
            }else(
                $scope.createAssignment=false
            )
        }
        $scope.openCreateTusk=function(){
            $location.path('/createTusk');
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
                $scope.hebrew={};
            }
            if(lang=='Русский'){
                $scope.language = 'Russian';
                $scope.hebrew={};
            }if(lang=='עברית'){
                $scope.language = 'Hebrew';
                $scope.hebrew={direction: "rtl"};
                $scope.hebrewMargin={marginLeft: 2+'vw'};
            }
            $translate.use($scope.language);
            $scope.statusMobileMenu=false;
        };




        $scope.endRegistration=function(){
            /*for(var k in  $scope.name ){
                console.log(' kkkk '+k+'=>'+  $scope.name[k]);
            }
            $scope.name.$loaded().then(function() {
                console.log("loaded record:",  $scope.name.$id,  $scope.name.someOtherKeyInData);
                });
            angular.forEach($scope.name, function(value, key) {
                console.log('kj,v '+key, value);
            });


            console.log('$scope.name.name '+  $scope.name.name);*/

        }
        /*$scope.statusMobileMenu=false;*/

        $scope.closeMobileMenu=function(){
            console.log('closeMobileMenu');
            $scope.statusMobileMenu=false;


        }
        $scope.openMobileMenu=function(){
            $scope.statusMobileMenu=true;

        }
        $scope.mesimot=null;
        dataService.getData().then(function(data){
            $scope.mesimot=data.data;
            console.log(data);
        })

    });
