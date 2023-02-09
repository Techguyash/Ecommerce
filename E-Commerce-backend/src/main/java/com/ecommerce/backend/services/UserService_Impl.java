package com.ecommerce.backend.services;

import com.ecommerce.backend.dto.LoginReqDTO;
import com.ecommerce.backend.dto.RegistrationReqDTO;
import com.ecommerce.backend.exceptionHandler.UserAlreadyAvailableException;
import com.ecommerce.backend.model.LocalUser;
import com.ecommerce.backend.repo.LocalUserRepo;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class UserService_Impl implements UserService
{
	ModelMapper modelMapper;
	LocalUserRepo localUserRepo;
	EncryptionService encryptionService;

	@Override
	public void registerUser(RegistrationReqDTO registrationReqDTO) throws UserAlreadyAvailableException
	{
//		TODO: check for existing user
		if (localUserRepo.findByEmail(registrationReqDTO.getEmail()).isPresent())
		{
			throw new UserAlreadyAvailableException("User Already found");
		}
		LocalUser mappedObject = modelMapper.map(registrationReqDTO, LocalUser.class);
		mappedObject.setCreatedOn(LocalDateTime.now());
		//	TODO: Encrypt password
		String hashedPassword = encryptionService.encryptPassword(registrationReqDTO.getPassword());
		mappedObject.setEncryptedPassword(hashedPassword);
//		TODO : save to Db
		localUserRepo.save(mappedObject);

	}

	@Override
	public String loginUser(LoginReqDTO loginReqDTO) throws UsernameNotFoundException
	{
		return null;
	}

}