package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Bitacora;
import com.bdproject.hespinoza.hesp.model.repository.BitacoraRepository;

@Service
public class BitacoraService {

    private final BitacoraRepository bitacoraRepo;

    public BitacoraService(BitacoraRepository bRepo) {
        this.bitacoraRepo = bRepo;
    }

    public List<Bitacora> findAll() {
        return bitacoraRepo.findAll();
    }

    public Optional<Bitacora> findById(Integer id) {
        return bitacoraRepo.findById(id);
    }

    public Bitacora guardar(Bitacora g) {
        return bitacoraRepo.save(g);
    }

    public void delete(Bitacora b) {
        bitacoraRepo.delete(b);
    }

}
