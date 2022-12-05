package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.ProductReqDTO;
import com.ecommerce.backend.dto.ProductResDTO;
import com.ecommerce.backend.exceptionHandler.NoDataFoundException;
import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.ImageUrls;
import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repo.ImageUrlRepo;
import com.ecommerce.backend.repo.ProductsRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductsService_Impl implements ProductService
{
    @Autowired
    ProductsRepo productsRepo;

    @Autowired
    ImageUrlRepo imageUrlRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public ProductResDTO createProduct(ProductReqDTO req)
    {
        Product product = modelMapper.map(req, Product.class);
        List<String> reqImageUrl = req.getImageUrl();
        List<ImageUrls> ImageEntityList=new ArrayList<>();
        for(String url : reqImageUrl)
        {
            ImageUrls entity=new ImageUrls();
            entity.setImageUrl(url);
            ImageEntityList.add(entity);

        }
        List<ImageUrls> imageUrls = imageUrlRepo.saveAll(ImageEntityList);
        product.setImageUrl(imageUrls);
        Product savedEntity = productsRepo.save(product);
        return modelMapper.map(savedEntity, ProductResDTO.class);

    }

    @Override
    public ProductResDTO getProduct(long id)
    {
        Product product = productsRepo.findById(id).orElseThrow(() -> new NoDataFoundException("Product", String.valueOf(id)));
        return modelMapper.map(product, ProductResDTO.class);
    }

    @Override
    public List<ProductResDTO> getAllProducts()
    {
        List<Product> all = productsRepo.findAll();
        List<ProductResDTO> resDTO=new ArrayList<>();
        all.stream().forEach(product -> {
            ProductResDTO mappedEntity = modelMapper.map(product, ProductResDTO.class);
            resDTO.add(mappedEntity);
        });
        return resDTO;
    }

    @Override
    public ProductResDTO updateProduct(ProductReqDTO req)
    {
        Product product = modelMapper.map(req, Product.class);
        Product savedEntity = productsRepo.save(product);
        return modelMapper.map(savedEntity, ProductResDTO.class);
    }

    @Override
    public boolean deleteProduct(long Id)
    {
        ProductResDTO product = getProduct(Id);
        if(product==null) throw new NoDataFoundException("Product",String.valueOf(Id));
        productsRepo.deleteById(Id);
        return true;
    }

    @Override
    public Integer countProductsByCategory(Category category)
    {
        return productsRepo.countByCategory(category);
    }
}
