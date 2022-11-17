package com.ecommerce.backend.services;

import com.ecommerce.backend.exceptionHandler.NoDataFoundException;
import com.ecommerce.backend.model.Vendor;
import com.ecommerce.backend.repo.VendorRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
public class VendorService_Impl implements VendorService
{
	@Autowired
	VendorRepo vendorRepo;

	@Override
	public Vendor createVendor(Vendor vendor)
	{
		return vendorRepo.save(vendor);
	}

	@Override
	public Vendor updateVendor(Vendor vendor)
	{
		if (vendorRepo.existsById(vendor.getVendorId()))
		{
			return vendorRepo.save(vendor);
		}
		else
		{
			throw new NoDataFoundException("Vendor not found with id :" + vendor.getVendorId());
		}


	}

	@Override
	public List<Vendor> fetchVendor()
	{
		return vendorRepo.findAll();
	}

	@Override
	public Vendor fetchVendor(long id)
	{
		return vendorRepo.findById(id).get();
	}

	@Override
	public boolean deleteVendor(long id)
	{
		vendorRepo.deleteById(id);
		return true;
	}
}
