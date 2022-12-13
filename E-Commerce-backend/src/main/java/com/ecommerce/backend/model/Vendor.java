package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vendor
{
	@SequenceGenerator(sequenceName = "SeqVendorId", initialValue = 1, name = "seqVendorId")

	@Id
	@GeneratedValue(generator = "seqVendorId", strategy = GenerationType.SEQUENCE)
	private long vendorId;
	private String vendorName;
	private String address;
	private long phoneNo;

	private boolean isPublished;


}
