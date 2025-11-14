package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.repository.PaisRepository;
import com.bdproject.hespinoza.hesp.model.entity.Pais;

@Service
public class PaisService {

    private final PaisRepository paisRepo;

    public PaisService(PaisRepository paisRepo) {
        this.paisRepo = paisRepo;
    }

    public List<Pais> findAll() {
        return paisRepo.findAll();
    }

    public Optional<Pais> findById(Integer id) {
        return paisRepo.findById(id);
    }

    public Pais guardar(Pais g) {
        return paisRepo.save(g);
    }

    public void delete(Pais ge) {
        paisRepo.delete(ge);
    }


}
