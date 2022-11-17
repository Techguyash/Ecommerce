package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category
{
    @SequenceGenerator(name = "SeqCollection", initialValue = 1, allocationSize = 1, sequenceName = "SeqCollection")

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SeqCollection")
    private long id;
    private String name;
    private String description;


}
