package com.ecommerce.backend.dto;

import com.ecommerce.backend.model.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductReqDTO
{
	private long productId;
	@NotNull(message = "must not be empty")
	private String productName;
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
	private int warranty;
	private List<String> colorVariants;
	private double rating;
	private double stock;
	@NotNull(message = "must not be empty")
	private String brandName;
	private int replacementPolicy;
	private List<String> imageUrl;

}
