angular.module('tasksList')
     .factory('Auth', function($firebaseObject,$firebaseAuth){

        return{

            getUser: function ( ) {
                var rootRef= firebase.database().ref().child('angular');
                var ref=rootRef.child('object');

                var ref1 = firebase.authDomain;
                var object=$firebaseObject(ref);
                var auth = firebase.auth();
                console.log('service.name '+ object.snap);
                ref.on('value', function(data){ console.log(' dxccx '+data.val().name)})

                return auth
            },
            authUsers: function(){
                const auth=firebase.auth();
                auth.signInAndRetrieveDataWithEmailAndPassword(email,pass);
                auth.createUserWithEmailAndPassword(email, pass);
                auth.onAuthStateChanged(function(firebaseUser){

                })
            }
        }
    });
