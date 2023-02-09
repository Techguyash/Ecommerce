package com.ecommerce.backend.dto;


import com.ecommerce.backend.model.USER_ROLE;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class RegistrationReqDTO
{
	@Email
	@NotNull(message = "must not be empty")
	private String email;
	@NotNull(message = "must not be empty")
	private String password;
	@NotNull(message = "must not be empty")
	private String firstName;
	@NotNull(message = "must not be empty")
	private String lastName;
	@NotNull(message = "must not be empty")
	private String phoneNo;
	@NotNull(message = "must not be empty")
	private USER_ROLE userRole;

}
