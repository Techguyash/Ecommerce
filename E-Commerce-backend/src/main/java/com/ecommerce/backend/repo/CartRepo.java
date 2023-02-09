package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.Cart;
import com.ecommerce.backend.model.LocalUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepo extends JpaRepository<Cart, Long>
{
	List<Cart> findByLocalUserEquals(LocalUser localUser);

}
