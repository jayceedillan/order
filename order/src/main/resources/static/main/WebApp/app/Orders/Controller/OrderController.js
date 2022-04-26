(function () {
      'use strict'; 
      angular
          .module('technical-exam')
          .controller('OrderController', OrderController);
     
      OrderController.$inject = ['orderList','OrderService', 'pagination', '$uibModal'];
      function OrderController(orderList, OrderService, pagination, $uibModal) {

            var vm = this;

            vm.orderList = orderList.data;
            vm.openModal = openModal;
            vm.reloadOrders = reloadOrders;
            vm.deleteOrder = deleteOrder;
            vm.pagination = pagination.initPage(vm.pagination,vm.totalRows,'10');
            vm.pageChanged = pageChanged;
            
            function pageChanged(){
                  vm.pagination = pagination.initPage(vm.pagination);
                  vm.reloadOrders();
            }

            function openModal(order){
                  $uibModal.open({
                        templateUrl: '/main/WebApp/app/Orders/Controller/Expenses.html',
                          backdrop: 'static',
                          keyboard: false,			
                          controller:'Expenses',
                          controllerAs: 'vmExpenses',
                          resolve: {
                          categoryList: ['CategoryService',
                                   (CategoryService) => {                 	      
                                      return CategoryService.getCategory();
                                  }],   
                                  order: () => {	                     
                                    return {'data': order };
                                    }  
                              },
                  
                        }).result.catch((result) => {				     
                              if (result) {
                                    vm.reloadOrders();
                              }
                        });

            }

            function reloadOrders() {
                  OrderService.getOrders(vm.pagination)
                  .then((result) => {
                        vm.orderList = result.data;
                  })
                  .catch((error) =>{
                        alert(error);
                  }); 
            }

            function deleteOrder(id) {
            if (confirm("Do you want to delete?")) {
                  OrderService.deleteOrder(id)
                  .then(() => {
                        vm.reloadOrders();
                  })
                  .catch((error) => {
                        alert(error);
                  }); 
                  } 
            }
      }
      
})();
  