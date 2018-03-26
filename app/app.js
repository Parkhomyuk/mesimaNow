(function(){
    var config = {
        apiKey: "AIzaSyCYpva3oynrAIBf4mdrrDxMSwjjjy4G-rE",
        authDomain: "mesima-198312.firebaseapp.com",
        databaseURL: "https://mesima-198312.firebaseio.com",
        projectId: "mesima-198312",
        storageBucket: "mesima-198312.appspot.com",
        messagingSenderId: "670443172095"
    };
    firebase.initializeApp(config);
    angular.module('tasksList',['ngMap','ngAnimate',"ngRoute","ui.bootstrap",'pascalprecht.translate',"ui.bootstrap.timepicker","ui.bootstrap.datepicker",'firebase'])
        .constant("dataUrl","data.json")
        .constant("pageCount",5)
        .config(['$locationProvider', function($locationProvider){
            $locationProvider.hashPrefix('');
        }])
        .config(function($routeProvider){
            $routeProvider.when("/complete", {
                templateUrl: "view/thankYou.html"
            });
            $routeProvider.when("/contionRegistration", {
                templateUrl: "views/endRegistration.view.html"
            });
            $routeProvider.when("/checkout", {
                templateUrl:"views/checkout.html"
            });
            $routeProvider.when("/mesimot",{
                templateUrl:"views/mesimaList.html"
            });
            $routeProvider.when("/unlimitedPackages",{
                templateUrl:"views/unlilimitedPackages.html"
            });
            $routeProvider.when("/createTusk",{
                templateUrl:"views/createTusk.html"
            });
            $routeProvider.otherwise({
                templateUrl:"views/firstPage.html"
            })
        })
        .factory('dataService', function($http, $q, dataUrl){
            return{
                getData: function(){
                    var deferred = $q.defer();
                    $http({method: 'GET', url: dataUrl}).
                    then (function success(response) {
                            deferred.resolve(response.data);

                        },function error(response) {
                            deferred.reject(response.status);
                        }
                    );
                    console.log(deferred.promise);
                    return deferred.promise;
                },

                currentItem:null,
                currentCategory:null,
                currentSubCategory:[]

            }
        })
        .filter('pagesCount',function(){
            return function(data, size){
                if(angular.isArray(data)){
                    var result=[];
                    for (var i=0;i<Math.ceil(data.length/size);i++){
                        result.push(i);
                    }
                    return result;
                }else{
                    return data;
                }

            }
        } )
        .filter('range', function($filter){
            return function(data, page, size){
                if(angular.isArray(data)&&angular.isNumber(page)&&angular.isNumber(size)){
                    var start_index=(page-1)*size;
                    if(start_index>data.length){
                        return [];
                    }else{
                        return $filter('limitTo')(data.slice(start_index), size);
                    }
                }else{
                    return data;
                }
            }
        })
        .controller('main', function($scope,NgMap){
            $scope.name='Alex';
            NgMap.getMap().then(function(map) {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);


                /* map.getBounds().contains(marker.getPosition());*/
            });
            $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsC97SJj2BKSiNCdHvWSnVBLsJkN9p4g4";

        });


})()
