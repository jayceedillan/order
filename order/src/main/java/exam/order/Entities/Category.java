package exam.order.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Category {

      @Id
      @GeneratedValue(strategy = GenerationType.AUTO)
      private Integer id;

      @Column(name = "name", length = 150)
      private String name;

}
