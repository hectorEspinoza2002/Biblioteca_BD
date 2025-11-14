package com.bdproject.hespinoza.hesp.service;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Carrera;
import com.bdproject.hespinoza.hesp.model.repository.CarreraRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CarreraService {

    private final CarreraRepository carreraRepo;

    public CarreraService(CarreraRepository carreraRepo) {
        this.carreraRepo = carreraRepo;
    }

    public List<Carrera> findAll() {
        return carreraRepo.findAll();
    }

    public Optional<Carrera> findById(Integer id) {
        return carreraRepo.findById(id);
    }

    public Carrera guardar(Carrera us) {
        return carreraRepo.save(us);
    }

    public void delete(Carrera ud) {
        carreraRepo.delete(ud);
    }

}
