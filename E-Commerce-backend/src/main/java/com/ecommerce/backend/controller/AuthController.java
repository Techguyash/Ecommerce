package com.ecommerce.backend.controller;

import com.ecommerce.backend.apiResponse.APIResponse;
import com.ecommerce.backend.dto.LoginReqDTO;
import com.ecommerce.backend.dto.RegistrationReqDTO;
import com.ecommerce.backend.model.LocalUser;
import com.ecommerce.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController
{
	UserService userService;

	@PostMapping("/register")
	public ResponseEntity<APIResponse> registerUser(@RequestBody @Valid RegistrationReqDTO dto)
	{
		userService.registerUser(dto);
		APIResponse response = new APIResponse();
		response.setPayload(dto.getEmail());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<APIResponse> loginUser(@RequestBody @Valid LoginReqDTO loginReqDTO)
	{
		return null;
	}

	@GetMapping("/me")
	public ResponseEntity<APIResponse> getLoggedInUserProfile(@AuthenticationPrincipal LocalUser user)
	{
		APIResponse response = new APIResponse(user);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
