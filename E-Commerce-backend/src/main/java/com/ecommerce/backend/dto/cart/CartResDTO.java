package com.ecommerce.backend.dto.cart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartResDTO
{
	private String userEmail;
	private int productCount;
	private List<CartItem> products;
}
