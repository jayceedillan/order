package exam.order.common;

import org.springframework.http.HttpHeaders;

public class AlertResponse {
      private static HttpHeaders createAlert(String message, String type) {

            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("X-ATMS-Alert-Message", message);
            httpHeaders.add("X-ATMS-Alert-Type", type);

            return httpHeaders;

      }

      public static HttpHeaders success(String message) {
            return createAlert(message, "success");
      }

      public static HttpHeaders info(String message) {
            return createAlert(message, "info");
      }

      public static HttpHeaders warning(String message) {
            return createAlert(message, "warning");
      }

      public static HttpHeaders error(String message) {
            return createAlert(message, "error");
      }
}
