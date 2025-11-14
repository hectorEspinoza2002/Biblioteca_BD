package com.bdproject.hespinoza.hesp.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bdproject.hespinoza.hesp.model.entity.Carrera;

@Repository
public interface CarreraRepository extends JpaRepository <Carrera, Integer>{

}
