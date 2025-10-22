package com.bdproject.hespinoza.hesp.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bdproject.hespinoza.hesp.model.entity.Autor;
import com.bdproject.hespinoza.hesp.model.entity.Usuario;

public interface AutorRepository extends JpaRepository<Autor, Integer>{

    List<Usuario> findByIdUsuarioAndPassword(String idUsuario, String password);

}
