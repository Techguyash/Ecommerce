package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductsRepo extends JpaRepository<Product, Long>
{
	Integer countByCategory(Category category);

	@Query("select p from Product p where p.productId = ?1")
	Product findByProductIdEquals(long productId);


}
