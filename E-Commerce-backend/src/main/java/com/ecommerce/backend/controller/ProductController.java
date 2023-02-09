package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.dto.ProductReqDTO;
import com.ecommerce.backend.dto.ProductResDTO;
import com.ecommerce.backend.services.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin({"http://localhost:3000", "http://localhost:3001"})
public class ProductController
{
    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<APIResponse> createProduct(@RequestBody @Valid ProductReqDTO req)
    {
        APIResponse response = new APIResponse();
        ProductResDTO product = productService.createProduct(req);
		response.setPayload(product);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<APIResponse> getProduct(@PathVariable long id)
    {
        ProductResDTO product = productService.getProduct(id);
		APIResponse response = new APIResponse();
		response.setPayload(product);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping()
	public ResponseEntity<APIResponse> getAllProduct()
	{
		List<ProductResDTO> allProducts = productService.getAllProducts();
		APIResponse response = new APIResponse();
		response.setPayload(allProducts);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{pageNumber}/{limit}")
	@Operation(description = "Sort the response using the response fields",
			summary = "Product pagination with offset and limit")
	@ApiResponses(
			@ApiResponse(responseCode = "200", description = "product fields")
	)
	public ResponseEntity<APIResponse> getAllProduct(@PathVariable(required = false) int pageNumber,
													 @PathVariable(required = false) int limit)
	{
		List<ProductResDTO> allProducts = productService.getAllProducts(pageNumber, limit);
		APIResponse response = new APIResponse();
		response.setPayload(allProducts);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/sort")
	@Operation(description = "Sort the response by the response field", summary = "Sort response using fields")
	public ResponseEntity<APIResponse>
	getAllCategoryBySortField(@RequestParam(value = "field") String field)
	{
		List<ProductResDTO> allProductsSortBy = productService.getAllProductsSortBy(field);
		APIResponse response = new APIResponse();
		response.setPayload(allProductsSortBy);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<APIResponse> updateProduct(@RequestBody @Valid ProductReqDTO req)
	{
		APIResponse response = new APIResponse();
		ProductResDTO product = productService.updateProduct(req);
		response.setPayload(product);
		return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<APIResponse> deleteProduct(@PathVariable long id)
    {
        APIResponse response = new APIResponse();
        boolean result = productService.deleteProduct(id);
		response.setPayload(result);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
