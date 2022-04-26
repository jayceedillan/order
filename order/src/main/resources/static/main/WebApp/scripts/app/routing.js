

app.config(function($stateProvider,$locationProvider) {

  $locationProvider.html5Mode(true);
    $stateProvider
		.state('Order',{
            templateUrl:'/main/WebApp/app/Orders/Controller/Order.html',
            url:'/Order',
            controller: 'OrderController',
            controllerAs: 'vmOrder',
            resolve: {
              orderList: ['OrderService',
                  function (OrderService) {          
                      const pagination = {
                        pageNumber: 1,
                        order: 'ASC',
                        sortBy: 'id',
                      }       	      
                      return OrderService.getOrders(pagination);
                  }],
          },         
        });
});




