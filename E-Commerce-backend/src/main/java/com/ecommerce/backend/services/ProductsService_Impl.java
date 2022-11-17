package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.ProductDTO;
import com.ecommerce.backend.exceptionHandler.NoDataFoundException;

import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repo.ProductsRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductsService_Impl implements ProductService {

    @Autowired
    ProductsRepo productsRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public ProductDTO createProduct(ProductDTO req) {
        Product product = modelMapper.map(req, Product.class);
        Product savedEntity = productsRepo.save(product);
        return modelMapper.map(savedEntity, ProductDTO.class);

    }

    @Override
    public ProductDTO getProduct(long id) {
        Product product = productsRepo.findById(id)
                .orElseThrow(() -> new NoDataFoundException("Product", String.valueOf(id)));
        // Product product = productsRepo.findById(id).get();
        Integer integer = countProductsByCategory(product.getCategory());
        ProductDTO map = modelMapper.map(product, ProductDTO.class);
        map.setProductId(integer);
        return map;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        List<Product> all = productsRepo.findAll();
        List<ProductDTO> resDTO = new ArrayList<>();
        all.stream().forEach(product -> {
            ProductDTO mappedEntity = modelMapper.map(product, ProductDTO.class);
            resDTO.add(mappedEntity);
        });
        return resDTO;
    }

    @Override
    public ProductDTO updateProduct(ProductDTO req) {
        Product product = modelMapper.map(req, Product.class);
        Product savedEntity = productsRepo.save(product);
        return modelMapper.map(savedEntity, ProductDTO.class);
    }

    @Override
    public boolean deleteProduct(long Id) {
        ProductDTO product = getProduct(Id);
        if (product == null) {
            throw new NoDataFoundException("Product", String.valueOf(Id));
        }
        productsRepo.deleteById(Id);
        return true;
    }

    @Override
    public Integer countProductsByCategory(Category category) {
        // TODO: select count(*) from products where category id=41
        int count = productsRepo.countByCategory(category);
        return count;
    }

}
