package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.cart.CartReqDTO;
import com.ecommerce.backend.dto.cart.CartResDTO;

import java.nio.file.attribute.UserPrincipalNotFoundException;

public interface CartService
{
	CartResDTO addProductToCart(CartReqDTO cartReqDTO) throws UserPrincipalNotFoundException;

	CartResDTO removeProductFromCart(CartReqDTO cartReqDTO);

	CartResDTO updateProductFromCart(CartReqDTO cartReqDTO);

	CartResDTO getAllProductFromCart(String email) throws UserPrincipalNotFoundException;


}
