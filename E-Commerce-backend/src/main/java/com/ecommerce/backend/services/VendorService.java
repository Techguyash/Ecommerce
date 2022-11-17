package com.ecommerce.backend.services;

import com.ecommerce.backend.model.Vendor;

import java.util.List;

public interface VendorService
{
	Vendor createVendor(Vendor vendor);

	Vendor updateVendor(Vendor vendor);

	List<Vendor> fetchVendor();

	Vendor fetchVendor(long id);

	boolean deleteVendor(long id);

}
