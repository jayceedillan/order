package exam.order.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import exam.order.Entities.Category;
// import exam.order.Repository.CategoryRepository;
import exam.order.Repository.CategoryRepository;

@Service
public class CategoryService {

	@Inject
	private CategoryRepository categoryRepository;

	public List<Category> getCategoryList() {

		List<Category> categoryRepo = new ArrayList<Category>();

		categoryRepo = categoryRepository.findAll();

		return categoryRepo;
	}

	@Transactional
	public void initCateogry() throws ParseException {

		Category category = new Category();
		category.setName("Food");
		Category category1 = new Category();
		category1.setName("Dress for women");
		Category category2 = new Category();
		category2.setName("Dress for men");
		categoryRepository.save(category);
		categoryRepository.save(category1);
		categoryRepository.save(category2);
	}

}
