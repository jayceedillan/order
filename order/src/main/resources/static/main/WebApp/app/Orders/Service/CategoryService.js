(function () {
      'use strict';
  
      angular
          .module('technical-exam')
          .factory('CategoryService', CategoryService);
  
          CategoryService.$inject = ['$http'];
  
      function CategoryService($http) {
          var factory = {
                getCategory: getCategory,    
          };
  
          return factory;
          
          function getCategory(){
                return $http({
                  method: 'GET',
                  url: 'category',
                //  params: paginationObject
              });
          }
      //     function saveEmployee(item){
      //           return $http({
      //             method: 'POST',
      //             url: 'Employee',
      //             data: item
      //         })
      //     }
          
      //     function removeEmployee(id){
      //                 return $http({
      //             method: 'DELETE',
      //             url: 'Employee/' + id
      //         })
      //    }
          
      //     function activeUser(){
      //           return $http({
      //             method: 'GET',
      //             url: 'Employee/activeUser'
      //         })
      //     }
         
      }
  })();