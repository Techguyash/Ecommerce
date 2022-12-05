package com.ecommerce.backend.repo;

import com.ecommerce.backend.model.ImageUrls;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ImageUrlRepo extends JpaRepository<ImageUrls,Long>
{
}
