package com.ecommerce.backend.dto.cart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartReqDTO
{
	private String userEmail;
	private CartItem product;
}
