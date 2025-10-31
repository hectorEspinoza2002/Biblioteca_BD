package com.bdproject.hespinoza.hesp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Bitacora;
import com.bdproject.hespinoza.hesp.service.BitacoraService;

@RestController
@CrossOrigin(origins = "*") 
public class BitacoraController {

    @Autowired
    private BitacoraService bitacoraService;

    @GetMapping("/list_bitacora")
    public List<Bitacora> listarTodos() {
        return bitacoraService.findAll();
    }

    @GetMapping("/list_bitacora/{id}")
    public Optional<Bitacora> obtenerPorId(@PathVariable Integer id) {
        return bitacoraService.findById(id);
    }

}
