package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Libro;
import com.bdproject.hespinoza.hesp.model.repository.LibroRepository;

@Service
public class LibroService {

    private final LibroRepository libroRepo;

    public LibroService(LibroRepository eRepo) {
        this.libroRepo = eRepo;
    }

    public List<Libro> findAll() {
        return libroRepo.findAll();
    }

    public Optional<Libro> findById(Integer id) {
        return libroRepo.findById(id);
    }

    public Libro guardar(Libro g) {
        return libroRepo.save(g);
    }

    public void delete(Libro ge) {
        libroRepo.delete(ge);
    }

}
