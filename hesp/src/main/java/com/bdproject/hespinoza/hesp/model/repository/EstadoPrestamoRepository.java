package com.bdproject.hespinoza.hesp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bdproject.hespinoza.hesp.model.entity.EstadoPrestamo;


@Repository
public interface EstadoPrestamoRepository extends JpaRepository<EstadoPrestamo, Integer>{
    
    EstadoPrestamo findByNombre(String nombre);

}
