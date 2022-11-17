package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.dto.CategoryDTO;
import com.ecommerce.backend.services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/category")
@AllArgsConstructor
public class CategoryController
{

	CategoryService categoryService;

	@PostMapping
	public ResponseEntity<APIResponse> createCollection(@RequestBody @Valid CategoryDTO req)
	{
		APIResponse response = new APIResponse();
		CategoryDTO category = categoryService.createCategory(req);
		response.setData(category);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<APIResponse> getCategory(@PathVariable long id)
	{
		CategoryDTO category = categoryService.getCategory(id);
		APIResponse response = new APIResponse();
		response.setData(category);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}


	@GetMapping()
	public ResponseEntity<APIResponse> getAllCategory()
	{
		List<CategoryDTO> allCategories = categoryService.getAllCategories();
		APIResponse response = new APIResponse();
		response.setData(allCategories);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<APIResponse> updateCollection(@RequestBody @Valid CategoryDTO req)
	{
		APIResponse response = new APIResponse();
		CategoryDTO category = categoryService.updateCategory(req);
		response.setData(category);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<APIResponse> deleteCollection(@PathVariable long id)
	{
		APIResponse response = new APIResponse();
		boolean result = categoryService.deleteCategory(id);
		response.setData(result);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
