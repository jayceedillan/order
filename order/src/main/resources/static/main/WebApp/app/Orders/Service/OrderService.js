(function () {
      'use strict';
  
      angular
          .module('technical-exam')
          .factory('OrderService', OrderService);
  
      OrderService.$inject = ['$http'];
  
      function OrderService($http) {
          var factory = {
                getOrders: getOrders,  
                saveOrders: saveOrders,
                deleteOrder: deleteOrder,
                download: download,
          };
  
          return factory;
          
          function getOrders(pagination){

                return $http({
                  method: 'GET',
                  url: 'order',
                  params: pagination,
              });
          }

          function saveOrders(item){
            debugger
            return $http({
              method: 'POST',
              url: 'order',
              data: item
              });
          }
          
          function deleteOrder(id){
            return $http({
              method: 'DELETE',
              url: 'order/' + id,
          });
        }

        function download(){
          return $http({
            method: 'POST',
            url: 'order/download',
            responseType: 'arraybuffer'
        });
        }
      }
  })();