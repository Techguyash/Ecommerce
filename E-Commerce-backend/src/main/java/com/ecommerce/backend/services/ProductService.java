package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.ProductDTO;
import com.ecommerce.backend.dto.ProductReqDTO;
import com.ecommerce.backend.dto.ProductResDTO;
import com.ecommerce.backend.model.Category;

import java.util.List;

public interface ProductService
{
    ProductResDTO createProduct(ProductReqDTO Product);

    ProductResDTO getProduct(long id);

    List<ProductResDTO> getAllProducts();

    ProductResDTO updateProduct(ProductReqDTO req);

    boolean deleteProduct(long Id);

    public Integer countProductsByCategory(Category category);


}
