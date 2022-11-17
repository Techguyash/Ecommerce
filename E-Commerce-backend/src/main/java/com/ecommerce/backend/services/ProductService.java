package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.ProductDTO;
import com.ecommerce.backend.model.Category;

import java.util.List;

public interface ProductService
{
    ProductDTO createProduct(ProductDTO Product);

    ProductDTO getProduct(long id);

    List<ProductDTO> getAllProducts();

    ProductDTO updateProduct(ProductDTO req);

    boolean deleteProduct(long Id);

    public Integer countProductsByCategory(Category category);


}
