package exam.order.Repository;

import org.springframework.stereotype.Repository;
import exam.order.Entities.Category;


import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.repository.CrudRepository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
