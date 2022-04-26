package exam.order.common;

public class RespService {

      public static ResponseMessage responseSuccess(String Header, String message) {

            ResponseMessage responseMessage = new ResponseMessage();

            responseMessage.setSuccess(message);
            responseMessage.setHeader(Header);

            return responseMessage;
      }

      public static ResponseMessage responseError(String Header, String message) {

            ResponseMessage responseMessage = new ResponseMessage();

            responseMessage.setError(message);
            responseMessage.setHeader(Header);

            return responseMessage;
      }

}
