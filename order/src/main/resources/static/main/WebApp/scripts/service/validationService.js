(function () {
      'use strict';
  
      angular
          .module('technical-exam')
          .factory('validationService', validationService);
  
          validationService.$inject = [];
  
      function validationService() {
  
          var factory = {
                isValid: isValid,
                showAlert: showAlert,
          };
  
          return factory;
  
          function isValid(myForm){       	
                
                var iError=  0;
  
                angular.forEach(myForm.$error.required, function(field) {
                    field.$setDirty();
                    iError++;
                  });  
                
                angular.forEach(myForm.$error.email, function(field) {
                          field.$setDirty();    	      
                        iError++;
                     });  
                
                angular.forEach(myForm.$error.matchPassword, function(field) {
                          field.$setDirty();    	      
                        iError++;
                     }); 
                
                return iError;
                
            }

            function showAlert(title,text, className  ){
                  $.gritter.add({
                           title: title,
                           text: text,
                           class_name: className + ' gritter-center' + (false ? ' gritter-light' : '')
                     });
         
                     return false;
           }
      }
  
  })();
  