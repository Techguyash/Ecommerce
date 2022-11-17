package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @SequenceGenerator(sequenceName = "SeqProductId", name = "SeqProductId", initialValue = 100, allocationSize = 1)

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SeqProductId")
    private long productId;
    private String title;
    private String Description;
    private double price;
    private double originalPrice;
    private long barCode;
    private double inventory;
    private String productImgUrl;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    private long sku;

}
