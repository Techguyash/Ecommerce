package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.dto.cart.CartReqDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
public class CartController
{
	public ResponseEntity<APIResponse> addToCart(CartReqDTO cartReqDTO)
	{
		return null;
	}
}
