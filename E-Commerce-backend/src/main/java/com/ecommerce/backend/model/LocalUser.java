package com.ecommerce.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class LocalUser
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "local_user_gen")
	@SequenceGenerator(name = "local_user_gen", sequenceName = "Seq_local_user")
	@Column(name = "id", nullable = false)
	private Long id;
	@Column(nullable = false)
	private String email;
	@JsonIgnore
	@Column(nullable = false, length = 1000)
	private String encryptedPassword;
	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	private boolean verified;
	private LocalDateTime createdOn;
	private boolean active;
	private String phoneNo;
	@Enumerated(EnumType.STRING)
	private USER_ROLE role;

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Address> addresses = new ArrayList<>();

	@OneToMany(mappedBy = "localUser", orphanRemoval = true)
	private Set<Cart> cartsId = new LinkedHashSet<>();

}
