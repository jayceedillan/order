(function () {
      'use strict'; 
      angular
          .module('technical-exam')
          .controller('Expenses', Expenses);
     
          Expenses.$inject = ['categoryList','order', 'validationService','OrderService', '$uibModalInstance'];
      function Expenses(categoryList, order, validationService, OrderService, $uibModalInstance) {

        var vm = this;

        var newOrder = {...order.data};
        vm.expenses = order === undefined ? {} : newOrder;
        vm.categoryList = categoryList.data;
        vm.AddOrUpdate = AddOrUpdate;
        vm.closeModal = closeModal;  
        vm.isNumberKey = isNumberKey
        
        function AddOrUpdate(expensesForm) {
          var error = validationService.isValid(expensesForm)

          if ( error === 0 ) {

            OrderService.saveOrders(vm.expenses)
                  .then( () => {
                    closeModal(true);
                  })
                  .catch(function(error){
                    debugger
                        alert(error);
                  });             
          }
        }

        function closeModal(isSave) {
          $uibModalInstance.dismiss(isSave);
        }

        function isNumberKey(txt, evt) {
          debugger
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode == 46) {
            //Check if the text already contains the . character
            if (txt.value.indexOf('.') === -1) {
              return true;
            } else {
              return false;
            }
          } else {
            if (charCode > 31 &&
              (charCode < 48 || charCode > 57))
              return false;
          }
          return true;
        }
      }
      
})();
  