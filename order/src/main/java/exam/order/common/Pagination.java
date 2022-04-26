package exam.order.common;

import lombok.Data;

@Data
public class Pagination {
      private String searchQuery = "";
      private Integer pageNumber = 1;
      private String sortBy = "";
      private String order = "ASC";
      private Integer limit = 0;
      private Integer offset = 10;
      private String specialQuery = "";
}
