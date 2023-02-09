package com.ecommerce.backend.services;

public interface EncryptionService
{
	public String encryptPassword(String password);

	public boolean verifyPassword(String password, String hash);
}
