package com.ecommerce.backend.exceptionHandler;

public class InvalidUserCredentials extends RuntimeException
{


	public InvalidUserCredentials(Throwable cause)
	{
		super(cause);
	}

	public InvalidUserCredentials(String message)
	{
		super(message);
	}

	public InvalidUserCredentials(String message, Throwable cause)
	{
		super(message, cause);
	}
}
