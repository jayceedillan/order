package exam.order.Dto;

import java.math.BigDecimal;

import exam.order.Entities.Category;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderDto {

      private int totalItems;

      private int id;
      private Category category;
      private String description;
      private BigDecimal price;
      private String dateCreated;
}
