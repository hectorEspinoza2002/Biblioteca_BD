package com.bdproject.hespinoza.hesp.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "pais")
@Entity
@Data
public class Pais {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_pais")
    @SequenceGenerator(name = "seq_pais", sequenceName = "seq_pais", allocationSize = 1)
    @Column(name = "id_pais")
    private Integer idPais;

    @Column(name = "nombre")
    private String nombre;

}
