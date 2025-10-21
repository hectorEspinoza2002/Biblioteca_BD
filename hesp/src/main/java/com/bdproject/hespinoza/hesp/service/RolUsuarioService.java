package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.RolUsuario;
import com.bdproject.hespinoza.hesp.model.repository.RolUsuarioRepository;

@Service
public class RolUsuarioService {

    private final RolUsuarioRepository rolUserRepo;

    public RolUsuarioService(RolUsuarioRepository eRepo) {
        this.rolUserRepo = eRepo;
    }

    public List<RolUsuario> findAll() {
        return rolUserRepo.findAll();
    }

    public Optional<RolUsuario> findById(Integer id) {
        return rolUserRepo.findById(id);
    }

    public RolUsuario guardar(RolUsuario rl) {
        return rolUserRepo.save(rl);
    }

    public void delete(RolUsuario rolus) {
        rolUserRepo.delete(rolus);
    }

}
