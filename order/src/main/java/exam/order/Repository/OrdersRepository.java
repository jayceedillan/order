package exam.order.Repository;

import org.springframework.stereotype.Repository;
import exam.order.Entities.Orders;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface OrdersRepository  extends CrudRepository<Orders, Integer>{
      Page<Orders> findAll(org.springframework.data.domain.Pageable pageable);
}
