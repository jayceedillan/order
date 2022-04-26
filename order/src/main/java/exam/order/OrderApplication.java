package exam.order;

import javax.inject.Inject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import exam.order.Service.CategoryService;

@SpringBootApplication
public class OrderApplication implements CommandLineRunner {

	@Inject
	CategoryService categoryService;

	public static void main(String[] args) {
		SpringApplication.run(OrderApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		// categoryService.initCateogry();
	}

}
