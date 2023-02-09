package com.ecommerce.backend.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Address
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(nullable = false)
	private String addressline1;
	private String addressline2;

	@Column(nullable = false, length = 75)
	private String city;
	@Column(nullable = false)
	private String state;
	@Column(nullable = false)
	private String country;
	@Column(nullable = false)
	private String pincode;

	@ManyToOne(optional = false)
	@JoinColumn(name = "user_id", nullable = false)
	private LocalUser user;

}
