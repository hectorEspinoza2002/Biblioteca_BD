package com.bdproject.hespinoza.hesp.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "autor")
@Entity
@Data
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_autor")
    private Integer idAutor;

    @Column(name = "nombre_completo")
    private String nombre;

    @Column(name = "nacionalidad")
    private String nacionalidad;

     @Column(name = "fecha_nacimiento")
    private String fechaNacimiento;

    //private String password;

    /* Hola Mundo! */

}
