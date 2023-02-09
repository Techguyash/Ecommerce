package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.LocalUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocalUserRepo extends JpaRepository<LocalUser, Long>
{
	Optional<LocalUser> findByEmail(String email);

}
