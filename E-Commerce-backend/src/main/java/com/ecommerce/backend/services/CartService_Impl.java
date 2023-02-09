package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.cart.CartItem;
import com.ecommerce.backend.dto.cart.CartReqDTO;
import com.ecommerce.backend.dto.cart.CartResDTO;
import com.ecommerce.backend.model.Cart;
import com.ecommerce.backend.model.LocalUser;
import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repo.CartRepo;
import com.ecommerce.backend.repo.LocalUserRepo;
import com.ecommerce.backend.repo.ProductsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService_Impl implements CartService
{
	private LocalUserRepo userRepo;
	private CartRepo cartRepo;
	private ProductsRepo productsRepo;


	@Override
	public CartResDTO addProductToCart(CartReqDTO cartReqDTO) throws UserPrincipalNotFoundException
	{
		String userEmail = cartReqDTO.getUserEmail();
		CartItem cartReqDTOProduct = cartReqDTO.getProduct();

		if (userEmail == null && cartReqDTOProduct.getQuantity() < 1)
		{
			return null;
		}

		Optional<LocalUser> optionalUser = userRepo.findByEmail(userEmail);
		if (!optionalUser.isPresent())
		{
			throw new UserPrincipalNotFoundException("User not found");
		}
//		TODO : Get cartReqDTOProduct and user details
		long productId = cartReqDTOProduct.getProductId();
		LocalUser user = optionalUser.get();
		int quantity = cartReqDTOProduct.getQuantity();
//		TODO: prepare model and save
		Product productToAdd = productsRepo.findByProductIdEquals(productId);
		Cart cartToAdd = new Cart(user, productToAdd, quantity, LocalDateTime.now());
		Cart save = cartRepo.save(cartToAdd);
//		TODO : Prepare response
		CartResDTO cartResDTO = new CartResDTO();
		cartResDTO.setUserEmail(userEmail);
		cartResDTO.setProductCount(1);
		cartResDTO.setProducts(List.of(cartReqDTOProduct));
		return cartResDTO;
	}

	@Override
	public CartResDTO removeProductFromCart(CartReqDTO cartReqDTO)
	{
		return null;
	}

	@Override
	public CartResDTO updateProductFromCart(CartReqDTO cartReqDTO)
	{
		return null;
	}

	@Override
	public CartResDTO getAllProductFromCart(String email) throws UserPrincipalNotFoundException
	{
		Optional<LocalUser> optionalUser = userRepo.findByEmail(email);
		if (optionalUser.isEmpty())
		{
			throw new UserPrincipalNotFoundException("Invalid user");
		}

		List<Cart> cartList = cartRepo.findByLocalUserEquals(optionalUser.get());
		LocalUser localUser = optionalUser.get();

//		TODO: reponse cart items conversion
		List<CartItem> cartItemsList = new ArrayList<>();
		for (Cart cart : cartList)
		{
			int quantity = cart.getQuantity();
			long productId = cart.getProduct().getProductId();
			CartItem item = new CartItem(quantity, productId);
			cartItemsList.add(item);
		}

//		TODO : prepare the response model
		CartResDTO cartResDTO = new CartResDTO();
		cartResDTO.setUserEmail(localUser.getEmail());
		cartResDTO.setProductCount(cartList.size());
		cartResDTO.setProducts(cartItemsList);

		return cartResDTO;
	}
}
