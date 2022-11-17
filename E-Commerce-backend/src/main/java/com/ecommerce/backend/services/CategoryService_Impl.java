package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.CategoryDTO;
import com.ecommerce.backend.exceptionHandler.NoDataFoundException;
import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.repo.CategoryRepo;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor

public class CategoryService_Impl implements CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ProductService productService;

    @Override
    public CategoryDTO createCategory(CategoryDTO req) {
        Category category = new Category();
        category = modelMapper.map(req, Category.class);
        Category savedData = categoryRepo.save(category);
        CategoryDTO resDTO = modelMapper.map(savedData, CategoryDTO.class);
        return resDTO;
    }

    @Override
    public CategoryDTO getCategory(long id) {
        Category category = categoryRepo.findById(id)
                .orElseThrow(() -> new NoDataFoundException("Category", String.valueOf(id)));
        Integer count = productService.countProductsByCategory(category);
        CategoryDTO map = modelMapper.map(category, CategoryDTO.class);
        map.setTotalProducts(count);
        return map;
    }

    @Override
    public List<CategoryDTO> getAllCategories() {
        List<Category> categoryList = categoryRepo.findAll();
        if (categoryList.size() == 0) {
            throw new NoDataFoundException("No data available");
        }

        List<CategoryDTO> resDto = new ArrayList<>();
        categoryList.stream().forEach(category -> {
            Integer count = productService.countProductsByCategory(category);
            CategoryDTO categoryDTO = modelMapper.map(category, CategoryDTO.class);
            categoryDTO.setTotalProducts(count);

            resDto.add(categoryDTO);
        });
        return resDto;
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO req) {
        Category category = modelMapper.map(req, Category.class);
        Category updatedData = categoryRepo.save(category);
        return modelMapper.map(updatedData, CategoryDTO.class);
    }

    @Override
    public boolean deleteCategory(long Id) {
        CategoryDTO category = getCategory(Id);
        if (category == null) {
            throw new NoDataFoundException("Category", String.valueOf(Id));
        }
        categoryRepo.deleteById(Id);
        return true;
    }

    @Override
    public Category getCategoryModel(long id) {
        return categoryRepo.findById(id).get();
    }

}
