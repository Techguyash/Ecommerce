package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product
{
    @SequenceGenerator(sequenceName = "SeqProductId",name = "SeqProductId",initialValue = 1,allocationSize = 1)

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long productId;
    private String productName;
    private String Description;
    private double price;
    private double originalPrice;
    private long barCode;
    private long sku;
    private int warranty;
    private String colorVariants;
    private double rating;
    private double stock;
    private String brandName;
    private int replacementPolicy;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "product_id")
    private List<ImageUrls> imageUrl = new ArrayList<>();


}
