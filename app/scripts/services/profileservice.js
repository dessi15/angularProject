
'use strict';

angular.module('myAppAngularMinApp')
  .service('ProfileService', ['$http','$q', '$localStorage', '$location', function($http, $q, $localStorage, $location)
  {


     return {
        getGroups: getGroups,
	getUsername: getUsername,
	getChannels: getChannels
     }

    function getGroups () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('http://localhost:3000/api/v1/users/:username/chat/groups', {
    		headers: {'x-access-token': $localStorage.token}
	}).success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }




    function getUsername () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('http://localhost:3000/api/v1/users/:username/chat/', {
    		headers: {'x-access-token': $localStorage.token}
	}).success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }



    function getChannels (groupId) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('http://localhost:3000/api/v1/users/:username/chat/groups/'+groupId, {
    		headers: {'x-access-token': $localStorage.token}
	}).success(function(data) {
		console.log("data");
		console.log(data);
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }















  }]);