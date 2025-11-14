package com.bdproject.hespinoza.hesp.model.entity;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "editorial")
@Entity
@Data
public class Editorial {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_editorial")
    @SequenceGenerator(name = "seq_editorial", sequenceName = "seq_editorial", allocationSize = 1)
    @Column(name = "id_editorial")
    private Integer idEditorial;

    @Column(name = "nombre")
    private String nombre;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Pais")
    private Pais pais;

}
