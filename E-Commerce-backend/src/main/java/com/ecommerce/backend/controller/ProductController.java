package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;

import com.ecommerce.backend.dto.ProductReqDTO;
import com.ecommerce.backend.dto.ProductResDTO;
import com.ecommerce.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController
{
    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<APIResponse> createProduct(@RequestBody @Valid ProductReqDTO req)
    {
        APIResponse response = new APIResponse();
        ProductResDTO product = productService.createProduct(req);
        response.setData(product);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<APIResponse> getProduct(@PathVariable long id)
    {
        ProductResDTO product = productService.getProduct(id);
        APIResponse response = new APIResponse();
        response.setData(product);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<APIResponse> getAllProduct()
    {
        List<ProductResDTO> allProducts = productService.getAllProducts();
        APIResponse response = new APIResponse();
        response.setData(allProducts);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<APIResponse> updateProduct(@RequestBody @Valid ProductReqDTO req)
    {
        APIResponse response = new APIResponse();
        ProductResDTO product = productService.updateProduct(req);
        response.setData(product);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<APIResponse> deleteProduct(@PathVariable long id)
    {
        APIResponse response = new APIResponse();
        boolean result = productService.deleteProduct(id);
        response.setData(result);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
