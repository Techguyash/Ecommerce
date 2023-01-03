package com.ecommerce.backend.dto;



import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.ImageUrls;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientProductDTO
{
	private long productId;
	@NotNull(message = "must not be empty")
	private String productName;
	@NotNull(message = "must not be empty")
	private String Description;
	@NotNull(message = "must not be empty")
	private double price;

	@NotNull(message = "must not be empty")
	private Category category;
	private long sku;
	private int warranty;
	private String[] colorVariants;
	private double rating;
	private double stock;

	private boolean featuredProduct;
	private boolean isPublished;
	private LocalDateTime createdOn;
	@NotNull(message = "must not be empty")
	private String brandName;
	private int replacementPolicy;
	private List<ImageUrls> imageUrl;
}
