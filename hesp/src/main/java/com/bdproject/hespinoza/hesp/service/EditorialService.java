package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Editorial;
import com.bdproject.hespinoza.hesp.model.repository.EditorialRepository;

@Service
public class EditorialService {

    private final EditorialRepository editorialRepo;

    public EditorialService(EditorialRepository eRepo) {
        this.editorialRepo = eRepo;
    }

    public List<Editorial> findAll() {
        return editorialRepo.findAll();
    }

    public Optional<Editorial> findById(Integer id) {
        return editorialRepo.findById(id);
    }

    public Editorial guardar(Editorial edit) {
        return editorialRepo.save(edit);
    }

    public void delete(Editorial ed) {
        editorialRepo.delete(ed);
    }

}
