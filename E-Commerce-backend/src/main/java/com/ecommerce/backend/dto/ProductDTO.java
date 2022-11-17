package com.ecommerce.backend.dto;

import com.ecommerce.backend.model.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    private long productId;
    @NotNull(message = "must not be empty")
    private String title;
    @NotNull(message = "must not be empty")
    private String Description;
    @NotNull(message = "must not be empty")
    private double price;
    @NotNull(message = "must not be empty")
    private double originalPrice;
    private long barCode;
    @NotNull(message = "must not be empty")
    private Category category;
    private long sku;
    private double inventory;
    private String productImgUrl;

}
