package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepo extends JpaRepository<Product, Long>
{
	Integer countByCategory(Category category);


}
