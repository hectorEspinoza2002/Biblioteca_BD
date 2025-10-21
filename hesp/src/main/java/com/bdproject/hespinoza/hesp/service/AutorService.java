package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Autor;
import com.bdproject.hespinoza.hesp.model.repository.AutorRepository;

@Service
public class AutorService {

    private final AutorRepository autorRepo;

    public AutorService(AutorRepository autoRepo) {
        this.autorRepo = autoRepo;
    }

    public List<Autor> findAll() {
        return autorRepo.findAll();
    }

    public Optional<Autor> findById(Integer id) {
        return autorRepo.findById(id);
    }

    public Autor guardar(Autor g) {
        return autorRepo.save(g);
    }

    public void delete(Autor ge) {
        autorRepo.delete(ge);
    }

}
