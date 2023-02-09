package com.ecommerce.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class LoginReqDTO
{
	@Email
	@NonNull
	private String email;
	@NonNull
	@NotBlank
	private String password;

}
