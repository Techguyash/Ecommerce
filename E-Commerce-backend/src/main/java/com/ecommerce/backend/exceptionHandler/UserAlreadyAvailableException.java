package com.ecommerce.backend.exceptionHandler;

public class UserAlreadyAvailableException extends RuntimeException
{
	public UserAlreadyAvailableException(String message, Throwable cause)
	{
		super(message, cause);
	}

	public UserAlreadyAvailableException(String message)
	{
		super(message);
	}


}
