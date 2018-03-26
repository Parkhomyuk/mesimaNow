angular.module('tasksList')
    .factory('aut', function($firebaseObject ){

        return{
            getUser: function ( ) {
                var rootRef= firebase.database().ref().child('angular');
                var ref=rootRef.child('object');
                var object=$firebaseObject(ref);
                console.log('service.name '+ object.snap);
                ref.on('value', function(data){ console.log(' dxccx '+data.val().name)})

                return object
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