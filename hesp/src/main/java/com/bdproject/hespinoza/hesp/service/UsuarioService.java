package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Usuario;
import com.bdproject.hespinoza.hesp.model.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepo;

    public Optional<Usuario> findByEmail(String email) {
        return usuarioRepo.findByEmail(email);
    }

    public UsuarioService(UsuarioRepository eRepo) {
        this.usuarioRepo = eRepo;
    }

    public List<Usuario> findAll() {
        return usuarioRepo.findAll();
    }

    public Optional<Usuario> findById(Integer id) {
        return usuarioRepo.findById(id);
    }

    public Usuario guardar(Usuario us) {
        return usuarioRepo.save(us);
    }

    public void delete(Usuario ud) {
        usuarioRepo.delete(ud);
    }

}
