package exam.order.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import javax.inject.Inject;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import exam.order.Dto.OrderDto;
import exam.order.Entities.Orders;
import exam.order.Repository.OrdersRepository;
import exam.order.common.Pagination;

@Service
public class OrderService {

	@Inject
	private OrdersRepository ordersRepository;

	public List<OrderDto> getOrderList(Pagination pagination, AtomicInteger totalItems) {
		List<OrderDto> orderList = new ArrayList<OrderDto>();

		try {

			Pageable pageable;

			if (pagination.getOrder().equals("ASC")) {
				pageable = PageRequest.of(pagination.getPageNumber() - 1, pagination.getOffset(),
						Sort.by(pagination.getSortBy()));
			} else {
				pageable = PageRequest.of(pagination.getPageNumber() - 1, pagination.getOffset(),
						Sort.by(pagination.getSortBy()).descending());
			}

			// new PageRequest(pageIndex, 10,Direction.ASC, "id");
			Page<Orders> page = ordersRepository.findAll(pageable);

			int icount = (int) (long) ordersRepository.count();
			totalItems.set(icount);

			for (Orders order : page) {
				orderList.add(orderMapper(order));
			}

		} catch (Exception e) {
			System.out.println(e);

		}

		return orderList;

	}

	public Orders saveOrder(OrderDto orderDto) {
		Orders orders = new Orders();
		orders.setId(orderDto.getId());
		orders.setCategory(orderDto.getCategory());
		orders.setDescription(orderDto.getDescription());
		orders.setPrice(orderDto.getPrice());
		orders.setDateCreated(new Date());
		ordersRepository.save(orders);

		return orders;
	}

	public OrderDto orderMapper(Orders orderData) {

		String date = new SimpleDateFormat("yyyy-MM-dd").format(orderData.getDateCreated());

		OrderDto orderDTO = new OrderDto();
		orderDTO.setId(orderData.getId());
		orderDTO.setPrice(orderData.getPrice());
		orderDTO.setCategory(orderData.getCategory());
		orderDTO.setDescription(orderData.getDescription());
		orderDTO.setDateCreated(date);

		return orderDTO;
	}

	public void deleteOrdert(int id) {
		ordersRepository.deleteById(id);
	}

	public List<Orders> getAll() {
		List<Orders> orderList = new ArrayList<Orders>();

		try {
			return (List<Orders>) ordersRepository.findAll();

		} catch (Exception e) {
			System.out.println(e);

		}

		return orderList;

	}
}
