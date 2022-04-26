
(function () {
    'use strict';

    angular
        .module('technical-exam')
        .factory('stateHandler', stateHandler);

    stateHandler.$inject = ['$rootScope', '$state', '$window'];

    function stateHandler($rootScope, $state, $window) {
        
    	return {
            initialize: initialize
        };

        function initialize() {
        	
        // 	EmployeeService.activeUser()
        //   .then(function (result) {          	    
        // 	   $rootScope.empInfo =result.data.authenticationData.loginName;         	              	 
        //      });     
        	
        // 	   var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        //            $rootScope.toState = toState;
        //            $rootScope.toParams = toParams;

               
        //        });
        	   
        // 	   var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
               
        //        });
        	                       
        //     $rootScope.$on('$destroy', function () {
        //         if (angular.isDefined(stateChangeStart) && stateChangeStart !== null) {
        //         	alert('xxxx');
        //             stateChangeStart();
        //         }
        //         if (angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null) {
        //             stateChangeSuccess();
        //         }
        //     });  

        }

    }

})();