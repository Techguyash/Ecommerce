package com.ecommerce.backend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Cart
{
	@SequenceGenerator(name = "SeqCartId", sequenceName = "SeqCartId")
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SeqCartId")
	private long cartId;
	@ManyToOne
	@JoinColumn(name = "user", nullable = false)
	private LocalUser localUser;
	@OneToOne(orphanRemoval = true)
	@JoinColumn(name = "product_Id")
	private Product product;
	private int quantity;
	private LocalDateTime addedOn;


	public Cart(LocalUser localUser, Product product, int quantity, LocalDateTime addedOn)
	{
		this.localUser = localUser;
		this.product = product;
		this.quantity = quantity;
		this.addedOn = addedOn;
	}
}
