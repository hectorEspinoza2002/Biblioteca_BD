package com.bdproject.hespinoza.hesp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Carrera;
import com.bdproject.hespinoza.hesp.service.CarreraService;

@RestController
@CrossOrigin(origins = "*")
public class CarreraController {

    @Autowired
    private CarreraService cService;

    @GetMapping("/list_carrera")
    public List<Carrera> listarTodos() {
        return cService.findAll();
    }

}
