package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ImageUrls
{
	@SequenceGenerator(sequenceName = "SeqImageId",name = "SeqImageId")

	@Id
	@GeneratedValue(generator = "SeqImageId",strategy = GenerationType.SEQUENCE)
	private long imageId;
	private String imageUrl;


}
