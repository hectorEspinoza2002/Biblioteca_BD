package com.bdproject.hespinoza.hesp.model.entity;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "prestamo")
@Entity
@Data
public class Prestamo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_prestamo")
    private Integer idPrestamo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_libro")
    private Libro libro;

    @Column(name = "fecha_prestamo")
    private LocalDateTime fechaPrestamo;

    @Column(name = "fecha_devolucion_prevista")
    private Date fechaDevolucionPrevista;

    @Column(name = "fecha_devolucion_real")
    private Date fechaDevolucionReal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "estado")
    private EstadoPrestamo estado;

}
