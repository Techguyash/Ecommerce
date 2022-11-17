package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long>
{

}
