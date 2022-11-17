package com.ecommerce.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class CategoryDTO
{
    

    private int id;
    @NotNull(message = "Product name null")
    @NotBlank(message = "title is blank")
    private String name;
    @NotNull(message = "Product description null")
    @NotBlank(message = "Description is blank")
    private String description;
    private long totalProducts;

}
