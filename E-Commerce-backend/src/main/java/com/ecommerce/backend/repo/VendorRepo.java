package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepo extends JpaRepository<Vendor, Long>
{
}
