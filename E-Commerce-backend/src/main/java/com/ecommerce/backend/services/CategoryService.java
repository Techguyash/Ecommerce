package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.CategoryDTO;
import com.ecommerce.backend.model.Category;

import java.util.List;

public interface CategoryService
{
	CategoryDTO createCategory(CategoryDTO category);

	CategoryDTO getCategory(long id);

	List<CategoryDTO> getAllCategories();

	public List<CategoryDTO> getAllCategories(int pageNumber, int limit);

	public List<CategoryDTO> getAllCategoriesSortBy(String field);


	CategoryDTO updateCategory(CategoryDTO req);

	boolean deleteCategory(long Id);

	public Category getCategoryModel(long id);
}
