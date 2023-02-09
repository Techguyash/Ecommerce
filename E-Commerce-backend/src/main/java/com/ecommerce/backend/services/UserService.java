package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.LoginReqDTO;
import com.ecommerce.backend.dto.RegistrationReqDTO;
import com.ecommerce.backend.exceptionHandler.UserAlreadyAvailableException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService
{
	public void registerUser(RegistrationReqDTO registrationReqDTO) throws UserAlreadyAvailableException;

	public String loginUser(LoginReqDTO loginReqDTO) throws UsernameNotFoundException;
}

