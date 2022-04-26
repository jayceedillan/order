package exam.order.Entities;

import java.math.BigDecimal;
// import java.sql.Date;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Orders {

      @Id
      @GeneratedValue(strategy = GenerationType.AUTO)
      private Integer id;

      @Column(name = "description", length = 150)
      private String description;

      @Column(name = "price", nullable = false, precision = 12, scale = 2)
      private BigDecimal price;

      @ManyToOne(targetEntity = Category.class)
      @JoinColumn(name = "categoryId", nullable = false)
      private Category category;

      @Column(nullable = false)
      private Date dateCreated;

}
