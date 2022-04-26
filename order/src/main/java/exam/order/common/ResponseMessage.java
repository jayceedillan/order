package exam.order.common;

import lombok.Data;

@Data
public class ResponseMessage {
      private String header;
      private String success;
      private String error;
}
