package com.bdproject.hespinoza.hesp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Pais;
import com.bdproject.hespinoza.hesp.service.PaisService;

@RestController
@CrossOrigin(origins = "*")
public class PaisController {

    @Autowired
    private PaisService pService;

    @GetMapping("/list_pais")
    public List<Pais> listarTodos() {
        return pService.findAll();
    }

}
