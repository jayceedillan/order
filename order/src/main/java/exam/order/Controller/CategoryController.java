package exam.order.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import exam.order.Entities.Category;
import exam.order.Service.CategoryService;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value = "category", produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryController {

      @Inject
      private CategoryService categoryService;

      @RequestMapping(method = RequestMethod.GET)
      public ResponseEntity<List<Category>> getCategory() {
            List<Category> categoryRepo = new ArrayList<Category>();

            try {
                  categoryRepo = categoryService.getCategoryList();
            } catch (Exception e) {
                  return new ResponseEntity<List<Category>>(categoryRepo, new HttpHeaders(), HttpStatus.BAD_REQUEST);
            }

            return new ResponseEntity<List<Category>>(categoryRepo, new HttpHeaders(), HttpStatus.OK);
      }

}
