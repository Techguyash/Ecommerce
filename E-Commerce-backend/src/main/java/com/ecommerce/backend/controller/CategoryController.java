package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.dto.CategoryDTO;
import com.ecommerce.backend.services.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin({"http://localhost:3000", "http://localhost:3001"})
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
		response.setPayload(category);

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<APIResponse> getCategory(@PathVariable long id)
	{
		CategoryDTO category = categoryService.getCategory(id);
		APIResponse response = new APIResponse();
		response.setPayload(category);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}


	@GetMapping()
	public ResponseEntity<APIResponse> getAllCategory()
	{
		List<CategoryDTO> allCategories = categoryService.getAllCategories();
		APIResponse response = new APIResponse();
		response.setPayload(allCategories);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{pageNumber}/{limit}")
	@Operation(description = "Sort the response using the response fields, except TotalProduct",
			summary = "Category pagination with offset and limit")
	@ApiResponses(
			@ApiResponse(responseCode = "200", description = "category values")
	)
	public ResponseEntity<APIResponse>
	getAllCategory(@PathVariable(required = false) int pageNumber,
				   @PathVariable(required = false) int limit)
	{

		List<CategoryDTO> allCategories = categoryService.getAllCategories(pageNumber, limit);
		APIResponse response = new APIResponse();
		response.setPayload(allCategories);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/sort")
	@Operation(description = "Sort the response by the response field", summary = "Sort response using fields")
	public ResponseEntity<APIResponse>
	getAllCategoryBySortField(@RequestParam(value = "field") String field)
	{
		List<CategoryDTO> allCategories = categoryService.getAllCategoriesSortBy(field);
		APIResponse response = new APIResponse();
		response.setPayload(allCategories);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}


	@PutMapping
	public ResponseEntity<APIResponse> updateCollection(@RequestBody @Valid CategoryDTO req)
	{
		APIResponse response = new APIResponse();
		CategoryDTO category = categoryService.updateCategory(req);
		response.setPayload(category);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<APIResponse> deleteCollection(@PathVariable long id)
	{
		APIResponse response = new APIResponse();
		boolean result = categoryService.deleteCategory(id);
		response.setPayload(result);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
