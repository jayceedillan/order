package exam.order.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exam.order.Dto.OrderDto;
import exam.order.Entities.Orders;
import exam.order.Service.OrderService;
import exam.order.common.AlertResponse;
import exam.order.common.Pagination;
import exam.order.common.RespService;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import javax.inject.Inject;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(value = "order", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderController {

    @Inject
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> getEmployees(Pagination pagination) throws SQLException {
        List<OrderDto> orderRepo = new ArrayList<OrderDto>();
        AtomicInteger totalItems = new AtomicInteger(0);

        try {
            orderRepo = orderService.getOrderList(pagination, totalItems);
        } catch (Exception e) {
            // TODO: handle exception
        }

        Map<String, Object> orderMap = new HashMap<>();
        orderMap.put("orders", orderRepo);
        orderMap.put("totalItems", totalItems);
        
        return orderMap;
    }

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Orders> saveEmployees(@RequestBody OrderDto orderDto) {
        Orders orders = new Orders();
        try {
            orders = orderService.saveOrder(orderDto);
        } catch (Exception e) {
            return new ResponseEntity<Orders>(orders, new HttpHeaders(), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<Orders>(orders, new HttpHeaders(), HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> deleteOrder(@PathVariable int id) {

        try {
            orderService.deleteOrdert(id);
            return ResponseEntity.ok().headers(AlertResponse.success("")).body(RespService.responseError("SUCCESS",
                    "Sucessfully delete"));

        } catch (Exception e) {
            return ResponseEntity.badRequest().headers(AlertResponse.error(""))
                    .body(RespService.responseError("FAILED.",
                            "Error Deleting"));
        }
    }
}
