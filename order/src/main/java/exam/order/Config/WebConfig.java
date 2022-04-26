
package exam.order.Config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


public class WebConfig extends WebMvcConfigurerAdapter {

    @Controller
    static class DefaultRoute {
        @RequestMapping({"/", "Order"})
        public String index() {
            return "forward:/main/WebApp/app/index.html";
        }
    }
}
